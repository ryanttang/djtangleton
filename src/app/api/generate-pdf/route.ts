import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    console.log('PDF generation started')
    const { type } = await request.json() // 'desktop' or 'mobile'
    console.log('Type received:', type)
    
    if (!type || !['desktop', 'mobile'].includes(type)) {
      return NextResponse.json({ error: 'Invalid type. Must be "desktop" or "mobile"' }, { status: 400 })
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    
    const page = await browser.newPage()
    
    // Set viewport based on type
    await page.setViewport({
      width: type === 'mobile' ? 1080 : 1200,
      height: type === 'mobile' ? 1920 : 800,
      deviceScaleFactor: 2
    })
    
    // Generate HTML content with embedded images
    console.log('Generating HTML content...')
    const html = await generateEPKHTML(type)
    console.log('HTML content generated, length:', html.length)
    
    // Set content and wait for fonts to load
    await page.setContent(html, { waitUntil: 'domcontentloaded' })
    
    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready')
    
    // Wait a bit for images to load (base64 images should load immediately)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Generate PDF
    const pdf = await page.pdf({
      format: type === 'mobile' ? undefined : 'Letter',
      width: type === 'mobile' ? '1080px' : undefined,
      height: type === 'mobile' ? '1920px' : undefined,
      printBackground: true,
      preferCSSPageSize: true,
      margin: type === 'mobile' ? {
        top: '0.1in',
        right: '0.1in',
        bottom: '0.1in',
        left: '0.1in'
      } : {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    })
    
    await browser.close()
    
    return new NextResponse(pdf as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="tangleton-epk-${type}.pdf"`
      }
    })
    
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}

async function generateEPKHTML(type: 'desktop' | 'mobile'): Promise<string> {
  const isMobile = type === 'mobile'
  
  // Convert images to base64
  const logoBase64 = await convertImageToBase64('/images/tangletonwhite.png')
  const backgroundBase64 = await convertImageToBase64('/images/background2.png')
  const epkImage1 = await convertImageToBase64('/images/DJimages/DSC02254 Large.jpeg')
  const epkImage2 = await convertImageToBase64('/images/DJimages/IMG_2511 Large.jpeg')
  const epkImage3 = await convertImageToBase64('/images/DJimages/rob.img_isoulationdayparty_06.04.2023_325 Large.jpeg')
  const epkImage4 = await convertImageToBase64('/images/DJimages/WID07468_Original Large.jpeg')
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Tangleton - DJ EPK</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Archivo+Narrow:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%), url('${backgroundBase64}');
          background-size: cover;
          background-position: center;
          background-blend-mode: overlay;
          color: #fff;
          line-height: 1.6;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          position: relative;
        }
        
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: -1;
        }
        
        .container {
          max-width: ${isMobile ? '100%' : '1200px'};
          margin: 0 auto;
          padding: ${isMobile ? '20px' : '40px'};
          height: ${isMobile ? '100vh' : 'auto'};
          display: flex;
          flex-direction: column;
        }
        
        .header {
          text-align: center;
          margin-bottom: ${isMobile ? '15px' : '40px'};
          padding-bottom: ${isMobile ? '12px' : '20px'};
          border-bottom: 2px solid #0ff;
        }
        
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: ${isMobile ? '12px' : '20px'};
        }
        
        
        .tagline {
          font-size: ${isMobile ? '1rem' : '1.2rem'};
          color: #ccc;
          margin-bottom: ${isMobile ? '12px' : '20px'};
        }
        
        .contact-info {
          display: flex;
          justify-content: center;
          gap: ${isMobile ? '12px' : '20px'};
          flex-wrap: wrap;
          font-size: ${isMobile ? '0.8rem' : '1rem'};
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: ${isMobile ? '0.9rem' : '1rem'};
        }
        
        .content-grid {
          display: grid;
          grid-template-columns: ${isMobile ? '1fr 1fr' : 'repeat(3, 1fr)'};
          gap: ${isMobile ? '15px' : '30px'};
          margin-bottom: ${isMobile ? '20px' : '40px'};
          flex: 1;
        }
        
        .mobile-full-width {
          grid-column: 1 / -1;
        }
        
        .image-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin: ${isMobile ? '15px 0' : '20px 0'};
          border-radius: 8px;
          overflow: hidden;
        }
        
        .epk-image {
          width: 100%;
          height: ${isMobile ? '150px' : '140px'};
          object-fit: cover;
          object-position: center top;
          border-radius: 0;
          border: none;
        }
        
        .epk-image:nth-child(3) {
          object-position: center 20%;
        }
        
        .epk-image:first-child {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        
        .epk-image:last-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        
        .card {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 46, 0.6) 100%);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 12px;
          padding: ${isMobile ? '18px' : '30px'};
          backdrop-filter: blur(10px);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.03) inset,
            0 4px 20px rgba(0, 0, 0, 0.3);
          position: relative;
          overflow: hidden;
        }
        
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 255, 255, 0.05) 0%, rgba(255, 0, 255, 0.05) 100%);
          pointer-events: none;
        }
        
        .card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="scanlines" x="0" y="0" width="100" height="4" patternUnits="userSpaceOnUse"><rect width="100" height="2" fill="rgba(0,0,0,0.1)"/><rect y="2" width="100" height="2" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23scanlines)"/></svg>');
          opacity: 0.3;
          pointer-events: none;
        }
        
        .card h3 {
          font-size: ${isMobile ? '1.1rem' : '1.5rem'};
          font-weight: 600;
          color: #fff;
          text-shadow: 
            0 0 0 #fff,
            -0.5px 0 #0ff, 
            0.5px 0 #f0f;
          margin-bottom: ${isMobile ? '10px' : '15px'};
          border-bottom: 1px solid rgba(0, 255, 255, 0.3);
          padding-bottom: ${isMobile ? '8px' : '10px'};
          position: relative;
          z-index: 1;
        }
        
        .card p {
          color: #ccc;
          font-size: ${isMobile ? '0.9rem' : '1rem'};
          margin-bottom: ${isMobile ? '8px' : '10px'};
          position: relative;
          z-index: 1;
          line-height: ${isMobile ? '1.4' : '1.6'};
        }
        
        .card ul {
          list-style: none;
          padding: 0;
          position: relative;
          z-index: 1;
        }
        
        .card li {
          color: #ccc;
          font-size: ${isMobile ? '0.85rem' : '1rem'};
          margin-bottom: ${isMobile ? '5px' : '5px'};
          padding-left: 15px;
          position: relative;
        }
        
        .played-at-card li {
          line-height: ${isMobile ? '1.2' : '1.4'};
          margin-bottom: ${isMobile ? '3px' : '5px'};
        }
        
        .mixed-by-card li {
          line-height: ${isMobile ? '1.1' : '1.3'};
          margin-bottom: ${isMobile ? '2px' : '3px'};
        }
        
        .card li:before {
          content: "•";
          color: #0ff;
          position: absolute;
          left: 0;
        }
        
        .two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: ${isMobile ? '10px' : '20px'};
        }
        
        .three-column {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: ${isMobile ? '8px' : '15px'};
        }
        
        .social-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: ${isMobile ? '5px' : '10px'};
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: ${isMobile ? '4px' : '8px'};
          color: #ccc;
          text-decoration: none;
          font-size: ${isMobile ? '0.7rem' : '1rem'};
          position: relative;
          z-index: 1;
        }
        
        .social-link:hover {
          color: #0ff;
        }
        
        .footer {
          text-align: center;
          margin-top: ${isMobile ? '15px' : '40px'};
          padding-top: ${isMobile ? '12px' : '20px'};
          border-top: 1px solid rgba(0, 255, 255, 0.3);
          color: #888;
          font-size: ${isMobile ? '0.7rem' : '0.9rem'};
        }
        
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .card {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            break-inside: avoid;
          }
          
          .logo-container {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .card h3 {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo-container">
            <img src="${logoBase64}" alt="Tangleton" style="height: 80px; width: auto; margin-bottom: 20px;" />
          </div>
          <div class="tagline">Los Angeles based DJ / Designer</div>
          <div class="contact-info">
            <div class="contact-item">
              <span>📧</span>
              <span>tangs.email@gmail.com</span>
            </div>
            <div class="contact-item">
              <span>📍</span>
              <span>Los Angeles, California</span>
            </div>
            <div class="contact-item">
              <span>🌍</span>
              <span>Available for bookings worldwide</span>
            </div>
          </div>
        </div>
        
        <!-- EPK Images -->
        <div class="image-grid">
          <img src="${epkImage1}" alt="DJ Performance" class="epk-image" />
          <img src="${epkImage2}" alt="DJ Performance" class="epk-image" />
          <img src="${epkImage3}" alt="DJ Performance" class="epk-image" />
          <img src="${epkImage4}" alt="DJ Performance" class="epk-image" />
        </div>
        
        <div class="content-grid">
          <!-- Bio Card -->
          <div class="card ${isMobile ? 'mobile-full-width' : ''}">
            <h3>Bio</h3>
            <p>Vietnamese American LA-based DJ specializing in curating the waviest blends from the sounds that makes you groove and bounce. Known for creating atmospheric soundscapes that transport audiences through analog nostalgia and digital futures. Tangleton's sets seamlessly weave between genres, creating unique moments that resonate with both underground and mainstream audiences.</p>
          </div>
          
          <!-- Played At Card -->
          <div class="card played-at-card">
            <h3>Played At</h3>
            <div class="${isMobile ? 'two-column' : 'three-column'}">
              <div>
                <h4 style="color: #0ff; margin-bottom: 10px; font-size: 1rem;">Cities</h4>
                <ul>
                  <li>Los Angeles, CA</li>
                  <li>Long Beach, CA</li>
                  <li>Shibuya, Japan</li>
                </ul>
              </div>
              <div>
                <h4 style="color: #0ff; margin-bottom: 10px; font-size: 1rem;">Parties</h4>
                <ul>
                  <li>ISOULATION</li>
                  <li>WAVY.FM</li>
                  <li>Down Bad Party</li>
                </ul>
              </div>
              ${!isMobile ? `
              <div>
                <ul style="margin-top: 30px;">
                  <li>STIIIZY Holiday Party</li>
                  <li>Catalyst Capo Con</li>
                  <li>Riot Games</li>
                  <li>Toasty Radio</li>
                </ul>
              </div>
              ` : `
              <div>
                <h4 style="color: #0ff; margin-bottom: 10px; font-size: 1rem;">More Parties</h4>
                <ul>
                  <li>STIIIZY Holiday Party</li>
                  <li>Catalyst Capo Con</li>
                  <li>Riot Games</li>
                  <li>Toasty Radio</li>
                </ul>
              </div>
              `}
            </div>
          </div>
          
          <!-- Genres Card -->
          <div class="card">
            <h3>Genres</h3>
            <p>House, Trap, Rap, R&B, Jersey Club, Baile Funk, Afrobeats, Future Beats, Phonk, Hip Hop, Classics, and Throwbacks.</p>
          </div>
          
          <!-- Mixed by tangleton Card -->
          <div class="card mixed-by-card">
            <h3>Mixed by tangleton</h3>
            <ul>
              <li>QUITPLAYING Series</li>
              <li>WHATUDO Series</li>
              <li>AFTERTHEAFTERS Series</li>
            </ul>
          </div>
          
          <!-- Social Media Card -->
          <div class="card">
            <h3>Social Media</h3>
            <div class="social-links">
              <a href="https://instagram.com/tangleton" class="social-link">
                <span>📷</span>
                <span>Instagram</span>
              </a>
              <a href="https://tiktok.com/@djtangleton" class="social-link">
                <span>🎬</span>
                <span>TikTok</span>
              </a>
            </div>
          </div>
          
          <!-- Listen to my Mixes Card -->
          <div class="card">
            <h3>Listen to my Mixes</h3>
            <div class="social-links">
              <a href="https://soundcloud.com/tangleton" class="social-link">
                <span>🎵</span>
                <span>SoundCloud</span>
              </a>
              <a href="https://youtube.com/@tangleton" class="social-link">
                <span>📺</span>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>Generated on ${new Date().toLocaleDateString()} | Tangleton DJ EPK</p>
        </div>
      </div>
    </body>
    </html>
  `
}

async function convertImageToBase64(imagePath: string): Promise<string> {
  try {
    console.log('Converting image:', imagePath)
    const publicPath = path.join(process.cwd(), 'public', imagePath)
    console.log('Public path:', publicPath)
    
    if (!fs.existsSync(publicPath)) {
      console.warn(`Image not found: ${publicPath}`)
      return ''
    }
    
    const imageBuffer = fs.readFileSync(publicPath)
    console.log('Image buffer size:', imageBuffer.length)
    
    let sharpInstance = sharp(imageBuffer)
    
    const fileExtension = path.extname(imagePath).toLowerCase()
    let mimeType = 'image/jpeg' // Default
    console.log('File extension:', fileExtension)
    
    if (fileExtension === '.png') {
      sharpInstance = sharpInstance.png({ quality: 90 }) // Use png for PNGs
      mimeType = 'image/png'
      console.log('Processing as PNG')
    } else {
      sharpInstance = sharpInstance.jpeg({ quality: 80 }) // Use jpeg for others
      console.log('Processing as JPEG')
    }

    console.log('Resizing image...')
    const resizedBuffer = await sharpInstance
      .resize(800, 600, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .toBuffer()
    
    console.log('Image converted successfully, size:', resizedBuffer.length)
    return `data:${mimeType};base64,${resizedBuffer.toString('base64')}`
  } catch (error) {
    console.error(`Error converting image ${imagePath}:`, error)
    return ''
  }
}
