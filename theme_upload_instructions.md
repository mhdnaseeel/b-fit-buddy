# B Fit Buddy Theme Upload Instructions

## Success!
The project has been converted from a Next.js App into a **Shopify Liquid Theme**. You can now upload it directly to your Online Store.

## Theme Structure
The root directory now contains the standard Shopify Theme folders:
- `layout/` (Main theme wrapper)
- `templates/` (Page templates, e.g., index.json)
- `sections/` (Modular components like Hero, Header, Programs)
- `assets/` (Images and CSS)
- `config/` (Theme settings)

## How to Upload to Shopify

1.  **Download/Zip the Folder**:
    You need to compress the contents of the root folder (containing `layout`, `templates`, etc.) into a ZIP file.
    *   **Mac**: Select all folders (`layout`, `templates`, `sections`, `config`, `assets`) -> Right Click -> Compress.

2.  **Upload**:
    *   Go to your Shopify Admin Dashboard.
    *   Navigate to **Online Store > Themes**.
    *   Click **Add theme** -> **Upload zip file**.
    *   Select the zip file you just created.

3.  **Customize**:
    *   Click **Customize** on your new theme.
    *   You will see the **Unleash Your Potential** hero section, **Our Expert Programs**, and **Why Choose B Fit Buddy** sections pre-configured.
    *   You can edit the text, images, and links directly in the Shopify Editor!

## Note on Images
The `templates/index.json` file references images as `shopify://shop_images/hero.jpg`. When you first upload the theme, you might need to re-select the images in the Theme Editor if Shopify doesn't automatically map the uploaded assets. The images are located in the `assets/` folder of the project.
