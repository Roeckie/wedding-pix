import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dzvstnapa',
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

export default async function handler(req, res) {
  try {
    const result = await cloudinary.search
      .expression('folder:wedding')
      .sort_by('created_at', 'desc')
      .max_results(100)
      .execute();

    res.status(200).json(result.resources);
  } catch (e) {
    res.status(500).json({ error: 'Failed' });
  }
}
