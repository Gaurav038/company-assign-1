// hooks/usePosts.js
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const usePosts = (filter) => {
  const query = filter?.length ? `?days=${filter.join(',')}` : '';
  const { data, error, mutate } = useSWR(`/api/posts${query}`, fetcher);

  return {
    posts: data ? data.posts : [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default usePosts;
