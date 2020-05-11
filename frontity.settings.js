const settings = {
  "name": "brochure-ware-site",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Brochure-ware site",
      "description": "Demo site for brochure-ware using Frontity"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/about"
            ],
            [
              "Services",
              "/services"
            ],
            [
              "News",
              "/news"
            ],
            [
              "Contact",
              "/contact"
            ],
          ],
          "footermenu": [
            ["FAQ", "/faq"],
            ["T&C", "/tandc"]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://brochure.test/wp-json",
          "homepage": "home",
          "postsPage": "news"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
