import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
