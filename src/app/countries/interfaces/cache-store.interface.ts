import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: CacheBody;
  byCountry: CacheBody;
  byRegion: RegionCountries;
}

interface CacheBody {
  term: string;
  countries: Country[];
}

interface RegionCountries {
  region?: Region;
  countries: Country[];
}
