import { fetcher, subscribe } from '@lib/helpers';
import storage from '@lib/storage';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useViewCount(slug, viewProp, readingTime = null) {
  const [viewCount, setViewCount] = useState(0);
  const router = useRouter();
  const isPost = !!router.query.slug;

  useEffect(() => {
    let isSubscribed = true;
    const value = storage.get(slug);
    const options = { isInSorage: value, slug, ttl: readingTime.time * 2 };

    if (isSubscribed) {
      if (isPost) subscribe(setViewCount, `http://localhost:3000/api/views/${slug}`, options);
    }
    if (viewProp) setViewCount(viewProp);
    return () => {
      isSubscribed = false;
    };
  }, []);

  return viewCount;
}
