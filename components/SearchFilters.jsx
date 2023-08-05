import { useState } from 'react';
import { Flex, Select, Box} from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { filterData, getFilterValues } from '../utils/filterData';
//import { baseUrl, fetchApi } from '../utils/fetchApi';

export default function SearchFilters() {
  const [filters] = useState(filterData);
//   const [searchTerm] = useState('');
//  const [locationData, setLocationData] = useState();
  
//  const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (searchTerm !== '') {
//       const fetchData = async () => {
//        // setLoading(true);
//         const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
//       //  setLoading(false);
//         setLocationData(data?.hits);
//       };

//       fetchData();
//     }
//   }, [searchTerm]);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query });
  };

  

  return (
    <Flex bg='whitesmoke' p='4' justifyContent='center' flexWrap='wrap'>
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2' >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
   
    </Flex>
  );
            }      

