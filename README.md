# Patreon Actor for Apify platform

Currently capable of scraping Campaigns and Posts.

## Input
Set a list of campaigns, You can use whole address or just the campaign name itself.

Correct examples:
- DankPods
- https://patreon.com/DankPods
- patreon.com/DankPods

## Scraping flow
```
Actor  ---------- campaignName ----------> Detail
Detail ----------- campaignId -----------> Campaign
Detail ----------- campaignId -----------> Posts
Posts  -- (until all posts are loaded) --> Posts
```

## TODO
- Scrapping public comments

## Development
see documentation references

### Documentation reference

- [Apify SDK](https://sdk.apify.com/)
- [Apify Actor documentation](https://docs.apify.com/actor)
- [Apify CLI](https://docs.apify.com/cli)
