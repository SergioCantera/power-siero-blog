import { createBucketClient } from '@cosmicjs/sdk'

const BUCKET_SLUG = import.meta.env.PUBLIC_COSMIC_BUCKET_SLUG
const READ_KEY = import.meta.env.PUBLIC_COSMIC_READ_KEY

const cosmic = createBucketClient({
  bucketSlug: BUCKET_SLUG,
  readKey: READ_KEY
})

export async function getAllPosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .depth(2)
  return data.objects
}

export async function getFeaturedPost() {
  const data = await cosmic.objects
    .findOne({
      type: 'featured-post',
      slug: 'set-featured-post'
    })
    .props('metadata')
    .depth(2)
  return data.object.metadata.post
}

export async function getAllTags(){
  const data = await cosmic.objects
  .find({
    type: 'tags'
  })
  .props('title,slug')
  .depth(1)
  return data.objects
}

export async function getSelectedTag(slug) {
  const data = await cosmic.objects
    .findOne({
      type: 'tags',
      slug: slug
    })
    .props('id,title,slug,metadata')
    .depth(1)
  return data.object
}

export async function getPostsByTag(tag) {
  const query = {
    type: 'posts',
    'metadata.tags': tag
  }
  const data = await cosmic.objects
    .find(query)
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .depth(2)
  return data.objects
}

export async function getConfig() {
  const data = await cosmic.objects
    .findOne({ type: 'config', slug: 'config' })
    .props('metadata')
    .depth(1)
  return data.object
}

export async function getCertifications() {
  const data = await cosmic.objects
    .find({
      type: 'certifications'
    })
    .props('title,slug,metadata')
    .depth(2)
  return data.objects
}

export async function getSessions() {
  const data = await cosmic.objects
    .find({
      type: 'sessions'
    })
    .props('title,slug,metadata')
    .sort('-metadata.date')
    .depth(2)
  return data.objects
}

export async function getEvents() {
  const data = await cosmic.objects
    .find({
      type: 'events'
    })
    .props('title,slug,metadata')
    .depth(2)
  return data.objects
}

export async function getCV() {
  const data = await cosmic.objects
  .findOne({
    type: 'cv'
  })
  .props('metadata')
  .depth(1)
  return data.object.metadata
}