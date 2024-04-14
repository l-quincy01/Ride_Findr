import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'document',
      validation: (Rule) => Rule.max(200).error('Keep restaurant name to only 200 characters'),
    },
    {
      name: 'price',
      title: 'Price of the dish',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    },
  ],
})
