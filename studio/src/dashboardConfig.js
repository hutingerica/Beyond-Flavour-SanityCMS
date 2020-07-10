export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info', layout: { width: 'medium' }, 
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f05c584d936a7587fffdfd0',
                  title: 'Sanity Studio',
                  name: 'beyond-flavour-cms-studio',
                  apiId: 'd54d8bac-320a-41c7-add0-637e04185fb4'
                },
                {
                  buildHookId: '5f05c584c927e7601927992b',
                  title: 'Blog Website',
                  name: 'beyond-flavour-website',
                  apiId: '4954239e-df42-446e-b75a-ca8e836b25e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hutingerica/Beyond-Flavour-SanityCMS',
            category: 'Code'
          },

          {
            title: 'Netlify Frontend',
            value: 'https://beyond-flavour-cms-studio.netlify.app',
            category: 'apps'
          },

          {
            title: 'Gatsby Preview Frontend',
            value: 'https://beyond-flavour-web-preview-4281662337.gtsb.io/',
            category: 'apps'
          },
        ]
      }
    },


    { name: 'project-users', layout: { height: 'small' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
