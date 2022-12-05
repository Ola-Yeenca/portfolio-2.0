export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title'
      title: 'Title',
      description: 'Title of project'
      type: 'string'
    },

    {
      name: 'summary'
      title: 'Summary',
      type: 'text'
    },
    {
      name: 'companyimage'
      title: 'company Image',
      type: 'image'
      options: {
        hotspot: true
      }
    },
    {
      name: 'dateStarted'
      title: 'DateStarted',
      type: 'date'
    },
    {
      name: 'technologies'
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', {type: 'skill'} }]
    }
    {
      name: 'linkToBuild'
      title: 'LinkToBuild',
      type: 'url',
    }
  ]
