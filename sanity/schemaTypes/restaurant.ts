import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant',
      type: 'string',
      validation: (Rule) => Rule.required().error('Restaurant name is required'),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'document',
      validation: (Rule) => Rule.max(200).error('Keep restaurant name to only 200 characters'),
    },
    {
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of restaurant',
      type: 'number',
    },
    {
      name: 'Long',
      title: 'Logitude of restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Enter a Rating from (1-5 Stars)',
      type: 'number',
      validation: (Rule) => Rule.required().max(5).min(1).error('Enter a vaild rating'),
    },
    {
      name: 'type',
      title: 'Type of dishes',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      title: 'Types of dishes)',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dishes'}]}],
    },
  ],
})
