import { createHttpRouter } from 'crawlee';
import { RequestLabel } from './constants.js';
import { campaignHandler } from './routes/campaign.js';
import { postsHandler } from './routes/posts.js';
import { detailHandler } from './routes/detail.js';

export const router = createHttpRouter();

router.addHandler(RequestLabel.CAMPAIGN, campaignHandler);
router.addHandler(RequestLabel.BOOTSTRAP, detailHandler);
router.addHandler(RequestLabel.POSTS, postsHandler);
