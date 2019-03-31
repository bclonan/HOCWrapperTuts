module.exports = {
  title: "HOC Wrapper Tuts",
  description: "Reference for new approach and cooresponding components",
  themeConfig: {
    repo: 'possibly1/HOCWrapperTuts',
    repoLabel: 'Contribute!',
    displayAllHeaders: false, // Default: false
    //docsRepo: 'possibly1/xyzdocs',
    //docsDir: 'docs',
    //docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',      
    nav: [
            { text: 'Home', link: '/' },
      {
        text: 'Reference',
        items: [
          { text: 'Frontend', link: '/Frontend/' },
          { text: 'Backend', link: '/Backend/' },
          { text: 'Test Ground', link: '/Testground/' },
        ]
      },
    ],
    sidebar: {
      '/Frontend/': frontend_tutorial_sidebar('Frontend Tutorials'),
      '/Backend/': backend_examples_sidebar('Backend Examples'),
      '/Testground/': test_examples_sidebar('Testing'),
        
    },
    
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};
function frontend_tutorial_sidebar (title) {
  return [
    {
      title,
      collapsable: true,
      children: [
        'howitworks',
      ]
    },
    {
        title: 'Step By Step',
        collapsable: true,
        children: [
          'wExistingUI',
          'woExistingUI'
        ]
      },
      {
        title: 'API and Generator',
        collapsable: true,
        children: [
          'apiandgenerator',
          'hocServiceWrapper',
          'hocFormWrapper',
          'formGenerator'
        ]
      },
    {
        title: 'Page Skeletons',
        collapsable: true,
        children: [
          'allSkeletonWrappers',
          'cardSkeleton',
          'tabSkeleton'
        ]
      },
      {
          title: 'Form Elements',
          collapsable: true,
          children: [
            'allFormElements',
            'baseInputText',
            'baseInputTextPermission',
          ]
        },
        {
            title: 'Visual Elements',
            collapsable: true,
            children: [
              'allVisualElements',
              'baseTable'
            ]
          },
          {
              title: 'Finished Examples',
              collapsable: true,
              children: [
                'e2eROScreen',
                'e2eTabScreen',
                'e2eCardScreen'
              ]
            },
            {
                title: 'Libraries',
                collapsable: true,
                children: [
                  'Axios'
                ]
              }
  ]
}

function backend_examples_sidebar (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
      ]
    }
  ]
}

function test_examples_sidebar (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'formpost',
        'serviceCall',
        'pageaction'
      ]
    }
  ]
}











