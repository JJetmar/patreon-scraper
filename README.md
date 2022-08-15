# Patreon Scraper

Currently capable of scraping Campaigns and Posts.

## Scraping flow
```
Actor --Campaign name--> Detail
Detail --campaignId--> Campaign
Detail --campaignId--> Posts
Posts --(until all posts loaded)--> Posts

End
```

## TODO
- Scrapping public comments

## Development
see documentation references

### Documentation reference

- [Apify SDK](https://sdk.apify.com/)
- [Apify Actor documentation](https://docs.apify.com/actor)
- [Apify CLI](https://docs.apify.com/cli)
