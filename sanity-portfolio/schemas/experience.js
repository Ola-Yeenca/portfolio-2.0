export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle'
      title: 'jobTitle',
      type: 'string'
    },

    {
      name: 'company'
      title: 'company',
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
      name: 'dateEnded'
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorkingHere'
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean'
    }
    {
      name: 'email'
      title: 'Email',
      type: 'string'
    }
    {
      name: 'technologies'
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', {type: 'skill'} }]
    }
    {
      name: 'points'
      title: 'Points',
      type: 'array',
      of: [{type: 'string' }]
    }
  ]
