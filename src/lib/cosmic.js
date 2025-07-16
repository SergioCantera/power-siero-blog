import { createBucketClient } from '@cosmicjs/sdk'

import {PUBLIC_COSMIC_BUCKET_SLUG, PUBLIC_COSMIC_READ_KEY} from 'astro:env/server'

const cosmic = createBucketClient({
  bucketSlug: PUBLIC_COSMIC_BUCKET_SLUG,
  readKey: PUBLIC_COSMIC_READ_KEY
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

export async function getHomePosts() {
  const data = await cosmic.objects
    .find({
      type: 'posts'
    })
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .depth(2)
    .limit(9)
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
  .sort('title')
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
  try {
    const data = await cosmic.objects
      .find(query)
      .props('title,slug,metadata,created_at')
      .sort('-created_at')
      .depth(2)
    
    return data.objects
  } catch (error) {
    if (error.status === 404) {
      return []
    }
  }
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