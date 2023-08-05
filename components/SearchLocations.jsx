import { useEffect, useState } from 'react';
import { Flex, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { getFilterValues } from '../utils/filterData';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg';


export default function SearchFilters() {

  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);
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

    router.push({ pathname: path+'search', query: query });
  };

  

  return (
    <Flex bg='whitesmoke' p='4' justifyContent='center' flexWrap='wrap'>
     
    <Flex flexDir='column'>
          <Button onClick={() => setShowLocations(!showLocations)} border='1px' borderColor='purple.200' marginTop='2' >
            Search Location
          </Button>
          {showLocations && (
            <Flex flexDir='column' pos='relative' paddingTop='2'>
              <Input
                placeholder='Type Here'
                value={searchTerm}
                w='300px'
                focusBorderColor='purple.300'
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm !== '' && (
                <Icon
                  as={MdCancel}
                  pos='absolute'
                  cursor='pointer'
                  right='5'
                  top='5'
                  zIndex='100'
                  onClick={() => setSearchTerm('')}
                />
              )}
              {loading && <Spinner margin='auto' marginTop='3' />}
              {showLocations && (
                <Box height='300px' overflow='auto'>
                  {locationData?.map((location) => (
                    <Box
                      key={location.id}
                      onClick={() => {
                        searchProperties({ locationExternalIDs: location.externalID });
                        setShowLocations(false);
                        setSearchTerm(location.name);
                      }}
                    >
                      <Text cursor='pointer' bg='whitesmoke' p='2' borderBottom='1px' borderColor='purple.100' >
                        {location.name}
                      </Text>
                    </Box>
                  ))}
                  {!loading && !locationData?.length && (
                    <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5' >
                      <Image src={noresult} alt='noresult'/>
                      <Text fontSize='xl' marginTop='3'>
                        Waiting to search!
                      </Text>
                    </Flex>
                  )}
                </Box>
              )}
            </Flex>
          )}
          </Flex>
    </Flex>
  );
            }      

