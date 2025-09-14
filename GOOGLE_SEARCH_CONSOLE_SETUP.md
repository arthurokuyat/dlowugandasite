# Google Search Console Setup Guide

## ✅ **Step 1: Verify Your Site (If Not Done)**

1. **Go to Google Search Console**: https://search.google.com/search-console
2. **Add Property**: Enter `https://www.dlowuganda.shop`
3. **Choose Verification Method**: HTML tag (recommended)
4. **Copy the verification code** (looks like: `<meta name="google-site-verification" content="abc123..." />`)
5. **Add to your layout.tsx**:

```tsx
// In app/layout.tsx, replace this line:
verification: {
  google: 'your-google-verification-code', // Replace with actual code
},
```

## ✅ **Step 2: Submit Sitemap (Already Done)**

- ✅ Sitemap submitted: `https://www.dlowuganda.shop/sitemap.xml`
- **Monitor**: Check "Coverage" report in 1-2 days

## ✅ **Step 3: Set Up URL Inspection**

1. **Go to URL Inspection** in Search Console
2. **Test your homepage**: `https://www.dlowuganda.shop/`
3. **Request Indexing** for important pages:
   - Homepage
   - About section
   - Features section
   - Contact section

## ✅ **Step 4: Configure Settings**

### **International Targeting**
1. **Go to Settings > International targeting**
2. **Set target country**: Uganda
3. **Set hreflang**: `en-UG` (English for Uganda)

### **Domain Settings**
1. **Preferred domain**: `https://www.dlowuganda.shop` (with www)
2. **Crawl rate**: Normal (default)

## ✅ **Step 5: Set Up Performance Monitoring**

### **Track These Keywords**
- "Dlow Uganda"
- "discounts near me Uganda"
- "cheap shops Kampala"
- "local store deals Uganda"
- "Uganda marketplace app"

### **Monitor These Metrics**
- **Impressions**: How often your site appears in search
- **Clicks**: How many people click your results
- **CTR**: Click-through rate
- **Average Position**: Where you rank for keywords

## 📊 **What to Expect in First 2 Weeks**

### **Week 1**
- ✅ Site gets indexed
- ✅ Sitemap processed
- ✅ Basic performance data appears

### **Week 2**
- 📈 First keyword rankings appear
- 📈 Initial traffic data
- 📈 Coverage report updates

## 🔍 **Daily Monitoring Checklist**

### **Check These Reports Daily**
1. **Performance**: New clicks/impressions
2. **Coverage**: Indexing status
3. **Enhancements**: Rich results opportunities
4. **Mobile Usability**: Any mobile issues

### **Weekly Actions**
1. **Request indexing** for new content
2. **Monitor Core Web Vitals**
3. **Check for crawl errors**
4. **Review search analytics**

## 🚨 **Common Issues & Solutions**

### **If Pages Not Indexed**
1. **Check robots.txt**: Ensure pages aren't blocked
2. **Request indexing**: Use URL Inspection tool
3. **Add internal links**: Link to important pages
4. **Wait 1-2 weeks**: New sites take time

### **If Low Rankings**
1. **Improve content**: Add more relevant keywords
2. **Get backlinks**: Local business directories
3. **Optimize meta descriptions**: Better click-through rates
4. **Improve page speed**: Core Web Vitals

## 📈 **Success Metrics**

### **Month 1 Goals**
- ✅ Site fully indexed
- ✅ 10+ keywords ranking
- ✅ 100+ monthly organic visits

### **Month 3 Goals**
- 📈 50+ keywords ranking
- 📈 1000+ monthly organic visits
- 📈 Top 10 for "Dlow Uganda"

### **Month 6 Goals**
- 📈 100+ keywords ranking
- 📈 5000+ monthly organic visits
- 📈 Top 3 for main keywords

## 🔧 **Advanced Optimization**

### **Rich Results**
- **Local Business**: Already implemented ✅
- **FAQ Schema**: Add to contact page
- **Review Schema**: When you get reviews

### **Core Web Vitals**
- **LCP**: < 2.5 seconds
- **FID**: < 100 milliseconds
- **CLS**: < 0.1

## 📞 **Need Help?**

- **Google Search Console Help**: https://support.google.com/webmasters
- **Dlow Support**: dlowuganda@gmail.com
- **Phone**: +256750781744

---

**Remember**: SEO is a marathon, not a sprint. Consistent monitoring and optimization will lead to sustainable growth! 