import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  result: NextApiResponse,
) {
  // Example request: http://<your-domain>/api/revalidate?token=<next-env-token>&path=<url-path-to-revalidate>

  const token = process.env.REVALIDATE_TOKEN;
  const reqToken = request.query.token;
  const reqPath = request.query.path;

  // Check for secret token to confirm this is a valid request
  if (token && reqToken !== token) {
    return result.status(401).json({ message: `Invalid token` });
  }

  // Check for path to validate
  if (typeof reqPath !== `string`) {
    return result.status(401).json({ message: `Invalid path` });
  }

  try {
    // This should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await result.revalidate(reqPath);
    return result.json({ revalidated: true });
  } catch (err) {
    console.log(err);

    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return result.status(500).send(`Error revalidating`);
  }
}
