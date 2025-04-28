import Axios from '@/lib/axios';
import { QueryOptions, useQuery } from '@tanstack/react-query';
import { productsQueryKey } from './quey-key';

interface FetchProductsParams {}

const fetchProducts = async (params?: FetchProductsParams) => {
  const response = await Axios.get('/posts', params);

  return response.data;
};

const fetchProductsQueryKey = (params?: FetchProductsParams) => [
  ...productsQueryKey.all,
  params,
];

export default function useProductsQuery(
  params?: FetchProductsParams,
  options?: QueryOptions<ReturnType<typeof fetchProducts>>
) {
  return useQuery({
    queryKey: fetchProductsQueryKey(params),
    queryFn: () => fetchProducts(params),
    ...options,
  });
}
