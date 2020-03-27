export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7e6648e5257101be45c63f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-practice-studio',
                  apiId: '8f7e6bb1-d416-4c06-9d94-a76dc8a4ed61'
                },
                {
                  buildHookId: '5e7e6647bad800a75927be38',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-practice',
                  apiId: '733cf179-e235-41db-be20-fa382010f3dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scottrollan/sanity-nextjs-practice',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-practice.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
