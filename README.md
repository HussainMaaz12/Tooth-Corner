# The Dental Center — Website Documentation

**Project:** The Dental Center Dental Clinic  
**Location:** Greater Noida West, India
**Domain:** https://yourdentalsite.com

---

## 📁 File Structure

```
dental-center/
│
├── index.html              ← Main landing page (SEO-optimised, fully structured)
├── robots.txt              ← Search engine crawl instructions
├── sitemap.xml             ← XML sitemap for Google indexing
├── README.md               ← This file
│
├── style.css               ← Main stylesheet (responsive, CSS variables, animations)
├── main.js                 ← Navigation, FAQ accordion, counters, scroll effects
├── services.html           ← Full services listing page
│
└── assets/                 ← (Media folder)
    ├── logo.png
    ├── favicon.svg
    ├── apple-touch-icon.png
    ├── og-image.jpg         ← 1200×630px for social sharing
    └── clinic.jpg           ← Clinic interior/exterior photo
```

---

## ✅ SEO Features Implemented

### On-Page SEO
- ✅ Optimised `<title>` tag with primary keyword + location
- ✅ Meta description (150–160 chars) with call to action
- ✅ Meta keywords targeting Greater Noida
- ✅ Canonical URL tag
- ✅ Geo meta tags (region, placename, position, ICBM)
- ✅ Proper H1 → H2 → H3 heading hierarchy
- ✅ Semantic HTML5
- ✅ ARIA labels and roles throughout

### Structured Data (JSON-LD)
- ✅ **Dentist + LocalBusiness + MedicalBusiness** schema
- ✅ **FAQPage** schema
- ✅ **BreadcrumbList** schema
- ✅ AggregateRating, OpeningHoursSpecification

---

## 🔧 Customisation Checklist

Before going live, replace all placeholder content:

- [ ] Replace `+91-XXXXXXXXXX` with real phone number
- [ ] Replace `info@yourdentalsite.com` with real email
- [ ] Replace `Dr. Your Name Here` in index.html with actual doctor's name
- [ ] Replace `[Shop/Floor], [Building Name]` with real address
- [ ] Update Google Maps embed URL with actual clinic coordinates
- [ ] Add doctor photo to `assets/` and update `doctor-photo-bg`
- [ ] Update social media links (Facebook, Instagram URLs)
- [ ] Add real Google review count and rating
- [ ] Connect appointment form to real backend / email / CRM

---

## ⚡ Performance Tips

1. **Images:** Compress all images to WebP format, use `loading="lazy"` on below-fold images
2. **Google Fonts:** Already using `display=swap`
3. **CDN:** Consider Cloudflare for caching and SSL

---

*Built for The Dental Center · 2025*
