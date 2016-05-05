## Progressive Enhancement (Scaling up)
We make an effort to ensure that our site is accessible to all types of browsers & device capabilities — by focusing on core content and functionality.

Benefits:a
- **Accessibility** - Your site’s content is within reach to all visitors, regardless of device and browser type
- **Portability** - The site will ideally work cross-device, cross-browser
- **Modularity** - This is a more technical advantage. By separating your site’s content (HTML) from its presentation (CSS) and any additional features (JavaScript), your site site is easier to build, maintain over time, and more fault-tolerant
- **Site performance** - You’ll see improvements in page loading times on the devices/contexts in which page load times matter the most — mobile phones, when people are trying to access your site on-the-go

#### Progressive disclosure
- Limit what you show on a screen
- Only show users what they need when they need it
- De-emphasize infrequent tasks
- Focus the interface on making the user successful
- Account for users with different levels of expertise (advanced and beginners alike)

> [Graceful degradation vs Progressive enhancement](https://www.w3.org/wiki/Graceful_degradation_versus_progressive_enhancement)

- Graceful degradation is the practice of building your web functionality so that it provides a certain level of user experience in more modern browsers, but it will also degrade gracefully to a lower level of user in experience in older browsers. This lower level is not as nice to use for your site visitors, but it does still provide them with the basic functionality that they came to your site to use; things do not break for them.
- Progressive enhancement is similar, but it does things the other way round. You start by establishing a basic level of user experience that all browsers will be able to provide when rendering your web site, but you also build in more advanced functionality that will automatically be available to browsers that can use it.

## Scaling Typography
[WEB DESIGN IS 95% TYPOGRAPHY](https://ia.net/know-how/the-web-is-all-about-typography-period).

The key consideration in responsive typography is that you want to make sure that your text is legible and accessible at all sizes.

A good font face is one that has:
1. a readable font size
2. acceptable color contrast (you can read the text color on the background — for example, you’re not setting grey text on a black background)
3. a legible font face (overly stylized or artistic fonts are not great options for body text).

Some rules of thumb for typography:
- Don’t use too many font faces in a visual layout — too many font choices can create clutter and visual disorder.
- For readability — use no more than 70-80 characters per line. You can often set this using the max-width property in CSS.
- Leading (pronounced "ledd-ing") is the space between lines of text. Make sure to use appropriate leading (set in CSS with the line-height property): rule of thumb is for your leading to be at least 2 points greater than your font-size (e.g. 12 pt leading for 10 pt font).
