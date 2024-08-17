export type weatherDataProps = {
    current: {
        air_quality: {
            co: number
            'gb-defra-index': number
            no2: number
            o3: number
            pm2_5: number
            pm10: number
            so2: number
            'us-epa-index': number
        }
        cloud: number
        condition: {
            code: number
            icon: string
            text:
                | 'Sunny'
                | 'Clear'
                | 'Cloudy'
                | 'Partly Cloudy'
                | 'Overcast'
                | 'Mist'
                | 'Patchy rain nearby'
                | 'Patchy rain possible'
                | 'Patchy snow possible'
                | 'Patchy sleet possible'
                | 'Patchy freezing drizzle possible'
                | 'Thundery outbreaks possible'
                | 'Blowing snow'
                | 'Blizzard'
                | 'Fog'
                | 'Freezing fog'
                | 'Patchy light drizzle'
                | 'Light drizzle'
                | 'Freezing drizzle'
                | 'Heavy freezing drizzle'
                | 'Patchy light rain'
                | 'Light rain'
                | 'Moderate rain at times'
                | 'Moderate rain'
                | 'Heavy rain at times'
                | 'Heavy rain'
                | 'Light freezing rain'
                | 'Moderate or heavy freezing rain'
                | 'Light sleet'
                | 'Moderate or heavy sleet'
                | 'Patchy light snow'
                | 'Light snow'
                | 'Patchy moderate snow'
                | 'Moderate snow'
                | 'Patchy heavy snow'
                | 'Heavy snow'
                | 'Ice pellets'
                | 'Light rain shower'
                | 'Moderate or heavy rain shower'
                | 'Torrential rain shower'
                | 'Light sleet showers'
                | 'Moderate or heavy sleet showers'
                | 'Light snow showers'
                | 'Moderate or heavy snow showers'
                | 'Light showers of ice pellets'
                | 'Moderate or heavy showers of ice pellets'
                | 'Patchy light rain with thunder'
                | 'Moderate or heavy rain with thunder'
                | 'Patchy light snow with thunder'
                | 'Moderate or heavy snow with thunder'
        }
        dewpoint_c: number
        dewpoint_f: number
        feelslike_c: number
        feelslike_f: number
        gust_kph: number
        gust_mph: number
        heatindex_c: number
        heatindex_f: number
        humidity: number
        is_day: 0 | 1
        last_updated: string
        last_updated_epoch: number
        precip_in: number
        precip_mm: number
        pressure_in: number
        pressure_mb: number
        temp_c: number
        temp_f: number
        uv: number
        vis_km: number
        vis_miles: number
        wind_degree: number
        wind_dir: string
        wind_kph: number
        wind_mph: number
        windchill_c: number
        windchill_f: number
    }
    location: {
        country: string
        lat: number
        localtime: string
        localtime_epoch: number
        lon: number
        name: string
        region: string
        tz_id: string
    }
}
