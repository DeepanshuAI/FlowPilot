import { useEffect } from 'react';

/**
 * SEOHead — injects page-specific meta tags, Open Graph, Twitter Cards,
 * and JSON-LD structured data into <head> using direct DOM manipulation.
 * Works without react-helmet or any extra dependency.
 */
export default function SEOHead({ title, description, canonical, ogType = 'website', schemas = [] }) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set/create a meta tag
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = attr;
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    // Standard meta
    setMeta('meta[name="description"]', ['name', 'description'], description);

    // Canonical
    let canonEl = document.querySelector('link[rel="canonical"]');
    if (!canonEl) {
      canonEl = document.createElement('link');
      canonEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonEl);
    }
    canonEl.setAttribute('href', canonical);

    // Open Graph
    const ogTags = [
      ['og:title', title],
      ['og:description', description],
      ['og:url', canonical],
      ['og:type', ogType],
      ['og:image', 'https://flowpilot.ai/og-image.png'],
      ['og:site_name', 'FlowPilot AI'],
    ];
    ogTags.forEach(([prop, content]) => {
      setMeta(`meta[property="${prop}"]`, ['property', prop], content);
    });

    // Twitter Cards
    const twitterTags = [
      ['twitter:card', 'summary_large_image'],
      ['twitter:site', '@flowpilotai'],
      ['twitter:title', title],
      ['twitter:description', description],
      ['twitter:image', 'https://flowpilot.ai/og-image.png'],
    ];
    twitterTags.forEach(([name, content]) => {
      setMeta(`meta[name="${name}"]`, ['name', name], content);
    });

    // Structured data — remove old, inject new
    document.querySelectorAll('script[data-seo-schema]').forEach((el) => el.remove());
    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-schema', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-schema]').forEach((el) => el.remove());
    };
  }, [title, description, canonical, ogType, schemas]);

  return null;
}

