# Why Photos Are Missing & How to Fix

## The Reason
When you upload a Shopify Theme via ZIP file, the images in the `assets/` folder are uploaded to the theme's file storage, **BUT** the settings in `templates/index.json` do not automatically "connect" to these files.

Shopify expects images in settings to be selected from the **Shopify Admin > Content > Files** or the **Theme Editor library**. It treats `shopify://shop_images/hero.jpg` as a reference to a file explicitly uploaded to the *Store's Files*, not just the *Theme's Assets*.

## The Fix (Takes 2 Minutes)

1.  **Open Theme Editor**:
    *   Go to **Online Store > Themes**.
    *   Click **Customize** on your new B Fit Buddy theme.

2.  **Re-select Images**:
    *   **Hero Section**: Click on the "Hero Banner" section on the left. Click **Select Image** -> Upload `hero.jpg` (you can find it in the `assets/` folder of the project you downloaded) or select it if Shopify found it.
    *   **Programs**: Click on "Our Expert Programs". For each block (Monthly Coaching, etc.), click **Select Image** and choose the corresponding `product-X.jpg`.
    *   **Why Us**: Click on "Why Choose B Fit Buddy". Select the `why-us.png` texture as the background image.

3.  **Save**: Click Save in the top right.

Once you do this *once*, Shopify remembers the connection, and the images will stay there forever.
