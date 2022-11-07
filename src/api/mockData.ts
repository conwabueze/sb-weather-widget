/*!
 * Copyright 2021, Staffbase GmbH and contributors.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CityReport } from "./openGeoApi";
import { WeatherReport } from "./openWeatherMapApi";

export const weather: WeatherReport = {
  lat: 50.8333,
  lon: 12.9167,
  timezone: "Europe/Berlin",
  timezone_offset: 7200,
  current: {
    dt: 1621490142,
    sunrise: 1621480347,
    sunset: 1621537053,
    temp: 282.14,
    feels_like: 282.14,
    pressure: 1019,
    humidity: 90,
    dew_point: 280.59,
    uvi: 0.87,
    clouds: 31,
    visibility: 10000,
    wind_speed: 0.89,
    wind_deg: 238,
    wind_gust: 1.34,
    weather: [
      { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" },
    ],
  },
  minutely: [
    { dt: 1621490160, precipitation: 0 },
    { dt: 1621490220, precipitation: 0 },
    { dt: 1621490280, precipitation: 0 },
    { dt: 1621490340, precipitation: 0 },
    { dt: 1621490400, precipitation: 0 },
    { dt: 1621490460, precipitation: 0 },
    { dt: 1621490520, precipitation: 0 },
    { dt: 1621490580, precipitation: 0 },
    { dt: 1621490640, precipitation: 0 },
    { dt: 1621490700, precipitation: 0 },
    { dt: 1621490760, precipitation: 0 },
    { dt: 1621490820, precipitation: 0 },
    { dt: 1621490880, precipitation: 0 },
    { dt: 1621490940, precipitation: 0 },
    { dt: 1621491000, precipitation: 0 },
    { dt: 1621491060, precipitation: 0 },
    { dt: 1621491120, precipitation: 0 },
    { dt: 1621491180, precipitation: 0 },
    { dt: 1621491240, precipitation: 0 },
    { dt: 1621491300, precipitation: 0 },
    { dt: 1621491360, precipitation: 0 },
    { dt: 1621491420, precipitation: 0 },
    { dt: 1621491480, precipitation: 0 },
    { dt: 1621491540, precipitation: 0 },
    { dt: 1621491600, precipitation: 0 },
    { dt: 1621491660, precipitation: 0 },
    { dt: 1621491720, precipitation: 0 },
    { dt: 1621491780, precipitation: 0 },
    { dt: 1621491840, precipitation: 0 },
    { dt: 1621491900, precipitation: 0 },
    { dt: 1621491960, precipitation: 0 },
    { dt: 1621492020, precipitation: 0 },
    { dt: 1621492080, precipitation: 0 },
    { dt: 1621492140, precipitation: 0 },
    { dt: 1621492200, precipitation: 0 },
    { dt: 1621492260, precipitation: 0 },
    { dt: 1621492320, precipitation: 0 },
    { dt: 1621492380, precipitation: 0 },
    { dt: 1621492440, precipitation: 0 },
    { dt: 1621492500, precipitation: 0 },
    { dt: 1621492560, precipitation: 0 },
    { dt: 1621492620, precipitation: 0 },
    { dt: 1621492680, precipitation: 0 },
    { dt: 1621492740, precipitation: 0 },
    { dt: 1621492800, precipitation: 0 },
    { dt: 1621492860, precipitation: 0 },
    { dt: 1621492920, precipitation: 0 },
    { dt: 1621492980, precipitation: 0 },
    { dt: 1621493040, precipitation: 0 },
    { dt: 1621493100, precipitation: 0 },
    { dt: 1621493160, precipitation: 0 },
    { dt: 1621493220, precipitation: 0 },
    { dt: 1621493280, precipitation: 0 },
    { dt: 1621493340, precipitation: 0 },
    { dt: 1621493400, precipitation: 0 },
    { dt: 1621493460, precipitation: 0 },
    { dt: 1621493520, precipitation: 0 },
    { dt: 1621493580, precipitation: 0 },
    { dt: 1621493640, precipitation: 0 },
    { dt: 1621493700, precipitation: 0 },
    { dt: 1621493760, precipitation: 0 },
  ],
  hourly: [
    {
      dt: 1621486800,
      temp: 281.69,
      feels_like: 280.05,
      pressure: 1019,
      humidity: 91,
      dew_point: 280.31,
      uvi: 0.32,
      clouds: 30,
      visibility: 10000,
      wind_speed: 2.78,
      wind_deg: 247,
      wind_gust: 7.1,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621490400,
      temp: 282.14,
      feels_like: 280.25,
      pressure: 1019,
      humidity: 90,
      dew_point: 280.59,
      uvi: 0.87,
      clouds: 31,
      visibility: 10000,
      wind_speed: 3.34,
      wind_deg: 261,
      wind_gust: 6.1,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621494000,
      temp: 282.16,
      feels_like: 280.23,
      pressure: 1019,
      humidity: 89,
      dew_point: 280.45,
      uvi: 1.3,
      clouds: 39,
      visibility: 10000,
      wind_speed: 3.43,
      wind_deg: 265,
      wind_gust: 5.5,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      pop: 0.04,
    },
    {
      dt: 1621497600,
      temp: 282.65,
      feels_like: 280.65,
      pressure: 1020,
      humidity: 87,
      dew_point: 280.6,
      uvi: 2.15,
      clouds: 51,
      visibility: 10000,
      wind_speed: 3.76,
      wind_deg: 273,
      wind_gust: 5.39,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
      pop: 0.67,
    },
    {
      dt: 1621501200,
      temp: 283.59,
      feels_like: 282.88,
      pressure: 1020,
      humidity: 84,
      dew_point: 281.01,
      uvi: 3.03,
      clouds: 62,
      visibility: 10000,
      wind_speed: 4.25,
      wind_deg: 285,
      wind_gust: 5.57,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.85,
      rain: { "1h": 0.36 },
    },
    {
      dt: 1621504800,
      temp: 284.38,
      feels_like: 283.67,
      pressure: 1020,
      humidity: 81,
      dew_point: 281.24,
      uvi: 3.89,
      clouds: 73,
      visibility: 10000,
      wind_speed: 4.39,
      wind_deg: 290,
      wind_gust: 5.68,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.93,
      rain: { "1h": 0.48 },
    },
    {
      dt: 1621508400,
      temp: 284.8,
      feels_like: 284.11,
      pressure: 1020,
      humidity: 80,
      dew_point: 281.05,
      uvi: 4.22,
      clouds: 86,
      visibility: 10000,
      wind_speed: 4,
      wind_deg: 292,
      wind_gust: 5.27,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 1,
      rain: { "1h": 0.49 },
    },
    {
      dt: 1621512000,
      temp: 285.33,
      feels_like: 284.61,
      pressure: 1020,
      humidity: 77,
      dew_point: 281,
      uvi: 4.05,
      clouds: 86,
      visibility: 10000,
      wind_speed: 4.11,
      wind_deg: 299,
      wind_gust: 5.38,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 1,
      rain: { "1h": 0.48 },
    },
    {
      dt: 1621515600,
      temp: 284.61,
      feels_like: 284,
      pressure: 1020,
      humidity: 84,
      dew_point: 281.55,
      uvi: 4.45,
      clouds: 98,
      visibility: 10000,
      wind_speed: 3.76,
      wind_deg: 298,
      wind_gust: 5.6,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.96,
      rain: { "1h": 0.63 },
    },
    {
      dt: 1621519200,
      temp: 284.8,
      feels_like: 284.19,
      pressure: 1020,
      humidity: 83,
      dew_point: 281.58,
      uvi: 3.31,
      clouds: 88,
      visibility: 10000,
      wind_speed: 3.34,
      wind_deg: 287,
      wind_gust: 5.36,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.96,
      rain: { "1h": 0.44 },
    },
    {
      dt: 1621522800,
      temp: 285.76,
      feels_like: 285.06,
      pressure: 1019,
      humidity: 76,
      dew_point: 281.3,
      uvi: 2.11,
      clouds: 62,
      visibility: 10000,
      wind_speed: 3.47,
      wind_deg: 281,
      wind_gust: 4.88,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.96,
      rain: { "1h": 0.33 },
    },
    {
      dt: 1621526400,
      temp: 285.71,
      feels_like: 285.03,
      pressure: 1019,
      humidity: 77,
      dew_point: 281.26,
      uvi: 1.31,
      clouds: 53,
      visibility: 10000,
      wind_speed: 2.96,
      wind_deg: 269,
      wind_gust: 4.49,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.98,
      rain: { "1h": 0.25 },
    },
    {
      dt: 1621530000,
      temp: 285.03,
      feels_like: 284.41,
      pressure: 1019,
      humidity: 82,
      dew_point: 281.67,
      uvi: 0.55,
      clouds: 45,
      visibility: 10000,
      wind_speed: 2.89,
      wind_deg: 245,
      wind_gust: 4.69,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.96,
      rain: { "1h": 0.2 },
    },
    {
      dt: 1621533600,
      temp: 283.36,
      feels_like: 282.73,
      pressure: 1019,
      humidity: 88,
      dew_point: 280.97,
      uvi: 0.16,
      clouds: 40,
      visibility: 10000,
      wind_speed: 2.57,
      wind_deg: 229,
      wind_gust: 4.79,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      pop: 0.76,
    },
    {
      dt: 1621537200,
      temp: 281.29,
      feels_like: 279.57,
      pressure: 1019,
      humidity: 92,
      dew_point: 279.55,
      uvi: 0,
      clouds: 67,
      visibility: 10000,
      wind_speed: 2.78,
      wind_deg: 197,
      wind_gust: 3.13,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      pop: 0,
    },
    {
      dt: 1621540800,
      temp: 280.88,
      feels_like: 278.92,
      pressure: 1019,
      humidity: 93,
      dew_point: 279.4,
      uvi: 0,
      clouds: 83,
      visibility: 10000,
      wind_speed: 3.03,
      wind_deg: 188,
      wind_gust: 5.61,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" },
      ],
      pop: 0,
    },
    {
      dt: 1621544400,
      temp: 280.65,
      feels_like: 278.56,
      pressure: 1019,
      humidity: 93,
      dew_point: 279.19,
      uvi: 0,
      clouds: 89,
      visibility: 10000,
      wind_speed: 3.15,
      wind_deg: 192,
      wind_gust: 7.45,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621548000,
      temp: 280.69,
      feels_like: 278.51,
      pressure: 1019,
      humidity: 92,
      dew_point: 279.1,
      uvi: 0,
      clouds: 92,
      visibility: 10000,
      wind_speed: 3.31,
      wind_deg: 191,
      wind_gust: 9.36,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621551600,
      temp: 280.86,
      feels_like: 278.8,
      pressure: 1018,
      humidity: 92,
      dew_point: 279.19,
      uvi: 0,
      clouds: 93,
      visibility: 10000,
      wind_speed: 3.17,
      wind_deg: 190,
      wind_gust: 8.94,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621555200,
      temp: 281.15,
      feels_like: 279.14,
      pressure: 1017,
      humidity: 91,
      dew_point: 279.4,
      uvi: 0,
      clouds: 94,
      visibility: 10000,
      wind_speed: 3.19,
      wind_deg: 190,
      wind_gust: 9.77,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621558800,
      temp: 280.97,
      feels_like: 278.93,
      pressure: 1016,
      humidity: 90,
      dew_point: 279.08,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.18,
      wind_deg: 187,
      wind_gust: 9.48,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621562400,
      temp: 280.46,
      feels_like: 278.23,
      pressure: 1015,
      humidity: 90,
      dew_point: 278.47,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.32,
      wind_deg: 186,
      wind_gust: 9.68,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621566000,
      temp: 280.21,
      feels_like: 277.98,
      pressure: 1015,
      humidity: 89,
      dew_point: 278.13,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.23,
      wind_deg: 183,
      wind_gust: 8.18,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621569600,
      temp: 280.79,
      feels_like: 278.48,
      pressure: 1014,
      humidity: 88,
      dew_point: 278.55,
      uvi: 0.05,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.58,
      wind_deg: 179,
      wind_gust: 10.55,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621573200,
      temp: 282.68,
      feels_like: 280.35,
      pressure: 1013,
      humidity: 83,
      dew_point: 279.59,
      uvi: 0.22,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.5,
      wind_deg: 189,
      wind_gust: 12.44,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621576800,
      temp: 284.36,
      feels_like: 283.52,
      pressure: 1012,
      humidity: 76,
      dew_point: 279.94,
      uvi: 0.61,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.28,
      wind_deg: 199,
      wind_gust: 12.34,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621580400,
      temp: 285.55,
      feels_like: 284.67,
      pressure: 1012,
      humidity: 70,
      dew_point: 279.73,
      uvi: 1.46,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.33,
      wind_deg: 198,
      wind_gust: 11.47,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621584000,
      temp: 286.44,
      feels_like: 285.52,
      pressure: 1011,
      humidity: 65,
      dew_point: 279.59,
      uvi: 2.41,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.79,
      wind_deg: 203,
      wind_gust: 11.2,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621587600,
      temp: 287.31,
      feels_like: 286.4,
      pressure: 1011,
      humidity: 62,
      dew_point: 279.62,
      uvi: 3.39,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6,
      wind_deg: 206,
      wind_gust: 11.54,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621591200,
      temp: 286.85,
      feels_like: 285.95,
      pressure: 1010,
      humidity: 64,
      dew_point: 279.67,
      uvi: 4.21,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.83,
      wind_deg: 204,
      wind_gust: 11.18,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621594800,
      temp: 287.48,
      feels_like: 286.64,
      pressure: 1009,
      humidity: 64,
      dew_point: 280.44,
      uvi: 4.56,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.86,
      wind_deg: 197,
      wind_gust: 11.84,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621598400,
      temp: 288.3,
      feels_like: 287.59,
      pressure: 1009,
      humidity: 66,
      dew_point: 281.59,
      uvi: 4.38,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.82,
      wind_deg: 212,
      wind_gust: 11.97,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0,
    },
    {
      dt: 1621602000,
      temp: 288.45,
      feels_like: 287.84,
      pressure: 1009,
      humidity: 69,
      dew_point: 282.41,
      uvi: 4,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.64,
      wind_deg: 222,
      wind_gust: 11.96,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.57,
      rain: { "1h": 0.17 },
    },
    {
      dt: 1621605600,
      temp: 287.7,
      feels_like: 287.12,
      pressure: 1008,
      humidity: 73,
      dew_point: 282.52,
      uvi: 2.98,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.04,
      wind_deg: 216,
      wind_gust: 12.83,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.64,
      rain: { "1h": 0.12 },
    },
    {
      dt: 1621609200,
      temp: 287.35,
      feels_like: 286.76,
      pressure: 1008,
      humidity: 74,
      dew_point: 282.37,
      uvi: 1.9,
      clouds: 100,
      visibility: 10000,
      wind_speed: 7.14,
      wind_deg: 226,
      wind_gust: 12.82,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.65,
    },
    {
      dt: 1621612800,
      temp: 286.29,
      feels_like: 285.67,
      pressure: 1008,
      humidity: 77,
      dew_point: 281.97,
      uvi: 0.87,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.99,
      wind_deg: 225,
      wind_gust: 12.93,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      pop: 0.69,
      rain: { "1h": 0.11 },
    },
    {
      dt: 1621616400,
      temp: 285.67,
      feels_like: 284.94,
      pressure: 1008,
      humidity: 75,
      dew_point: 280.9,
      uvi: 0.37,
      clouds: 100,
      visibility: 10000,
      wind_speed: 6.26,
      wind_deg: 217,
      wind_gust: 12.04,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.55,
    },
    {
      dt: 1621620000,
      temp: 285.21,
      feels_like: 284.48,
      pressure: 1008,
      humidity: 77,
      dew_point: 280.93,
      uvi: 0.11,
      clouds: 98,
      visibility: 10000,
      wind_speed: 6.17,
      wind_deg: 213,
      wind_gust: 11.9,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.4,
    },
    {
      dt: 1621623600,
      temp: 284.51,
      feels_like: 283.74,
      pressure: 1008,
      humidity: 78,
      dew_point: 280.27,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.58,
      wind_deg: 211,
      wind_gust: 11.79,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.12,
    },
    {
      dt: 1621627200,
      temp: 284.32,
      feels_like: 283.56,
      pressure: 1008,
      humidity: 79,
      dew_point: 280.36,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.42,
      wind_deg: 215,
      wind_gust: 11.07,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.31,
    },
    {
      dt: 1621630800,
      temp: 283.95,
      feels_like: 283.23,
      pressure: 1008,
      humidity: 82,
      dew_point: 280.54,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.45,
      wind_deg: 217,
      wind_gust: 11.22,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.32,
    },
    {
      dt: 1621634400,
      temp: 283.75,
      feels_like: 283.03,
      pressure: 1007,
      humidity: 83,
      dew_point: 280.59,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.74,
      wind_deg: 210,
      wind_gust: 10.26,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.35,
    },
    {
      dt: 1621638000,
      temp: 283.84,
      feels_like: 283.08,
      pressure: 1008,
      humidity: 81,
      dew_point: 280.38,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 5.64,
      wind_deg: 211,
      wind_gust: 11.14,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.31,
    },
    {
      dt: 1621641600,
      temp: 283.24,
      feels_like: 282.45,
      pressure: 1007,
      humidity: 82,
      dew_point: 279.87,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 5.66,
      wind_deg: 221,
      wind_gust: 11.41,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.31,
    },
    {
      dt: 1621645200,
      temp: 282.36,
      feels_like: 279.45,
      pressure: 1007,
      humidity: 85,
      dew_point: 279.48,
      uvi: 0,
      clouds: 89,
      visibility: 10000,
      wind_speed: 5.82,
      wind_deg: 224,
      wind_gust: 12.44,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.06,
    },
    {
      dt: 1621648800,
      temp: 282.46,
      feels_like: 279.42,
      pressure: 1007,
      humidity: 82,
      dew_point: 279.21,
      uvi: 0,
      clouds: 94,
      visibility: 10000,
      wind_speed: 6.3,
      wind_deg: 223,
      wind_gust: 12.78,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.13,
    },
    {
      dt: 1621652400,
      temp: 282.33,
      feels_like: 279.21,
      pressure: 1007,
      humidity: 83,
      dew_point: 279.09,
      uvi: 0,
      clouds: 96,
      visibility: 10000,
      wind_speed: 6.42,
      wind_deg: 231,
      wind_gust: 12.65,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      pop: 0.13,
    },
    {
      dt: 1621656000,
      temp: 282.12,
      feels_like: 279.01,
      pressure: 1007,
      humidity: 84,
      dew_point: 279.17,
      uvi: 0.07,
      clouds: 97,
      visibility: 10000,
      wind_speed: 6.21,
      wind_deg: 230,
      wind_gust: 11.78,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      pop: 0.11,
    },
  ],
  daily: [
    {
      dt: 1621508400,
      sunrise: 1621480347,
      sunset: 1621537053,
      moonrise: 1621507980,
      moonset: 1621472400,
      moon_phase: 0.27,
      temp: {
        day: 284.8,
        min: 278.13,
        max: 285.76,
        night: 280.65,
        eve: 285.03,
        morn: 281.69,
      },
      feels_like: { day: 284.11, night: 278.56, eve: 284.41, morn: 280.05 },
      pressure: 1020,
      humidity: 80,
      dew_point: 281.05,
      wind_speed: 4.39,
      wind_deg: 290,
      wind_gust: 7.45,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 86,
      pop: 1,
      rain: 3.66,
      uvi: 4.45,
    },
    {
      dt: 1621594800,
      sunrise: 1621566674,
      sunset: 1621623536,
      moonrise: 1621599120,
      moonset: 1621560000,
      moon_phase: 0.31,
      temp: {
        day: 287.48,
        min: 280.21,
        max: 288.45,
        night: 283.95,
        eve: 285.67,
        morn: 282.68,
      },
      feels_like: { day: 286.64, night: 283.23, eve: 284.94, morn: 280.35 },
      pressure: 1009,
      humidity: 64,
      dew_point: 280.44,
      wind_speed: 7.64,
      wind_deg: 222,
      wind_gust: 12.93,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 100,
      pop: 0.69,
      rain: 0.4,
      uvi: 4.56,
    },
    {
      dt: 1621681200,
      sunrise: 1621653002,
      sunset: 1621710017,
      moonrise: 1621690440,
      moonset: 1621647540,
      moon_phase: 0.34,
      temp: {
        day: 287.31,
        min: 281.54,
        max: 288.45,
        night: 281.54,
        eve: 284.37,
        morn: 282.35,
      },
      feels_like: { day: 286.09, night: 278.42, eve: 283.58, morn: 279.28 },
      pressure: 1007,
      humidity: 50,
      dew_point: 276.46,
      wind_speed: 8.13,
      wind_deg: 249,
      wind_gust: 13.83,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 60,
      pop: 0.67,
      rain: 1.61,
      uvi: 5.55,
    },
    {
      dt: 1621767600,
      sunrise: 1621739333,
      sunset: 1621796497,
      moonrise: 1621781880,
      moonset: 1621734960,
      moon_phase: 0.38,
      temp: {
        day: 285.68,
        min: 279.8,
        max: 286.32,
        night: 281.63,
        eve: 283.82,
        morn: 282.27,
      },
      feels_like: { day: 284.79, night: 279, eve: 282.93, morn: 279.3 },
      pressure: 1015,
      humidity: 69,
      dew_point: 279.69,
      wind_speed: 6.75,
      wind_deg: 251,
      wind_gust: 11.97,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 76,
      pop: 0.96,
      rain: 2.35,
      uvi: 4.49,
    },
    {
      dt: 1621854000,
      sunrise: 1621825665,
      sunset: 1621882975,
      moonrise: 1621873500,
      moonset: 1621822500,
      moon_phase: 0.42,
      temp: {
        day: 292.17,
        min: 280.98,
        max: 292.17,
        night: 285.43,
        eve: 288.38,
        morn: 285.51,
      },
      feels_like: { day: 291.41, night: 284.67, eve: 287.86, morn: 284.5 },
      pressure: 1015,
      humidity: 49,
      dew_point: 280.71,
      wind_speed: 6.38,
      wind_deg: 208,
      wind_gust: 12.07,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: 85,
      pop: 0,
      uvi: 3.77,
    },
    {
      dt: 1621940400,
      sunrise: 1621912001,
      sunset: 1621969452,
      moonrise: 1621965360,
      moonset: 1621910160,
      moon_phase: 0.46,
      temp: {
        day: 282.58,
        min: 279.61,
        max: 285.33,
        night: 279.61,
        eve: 283.16,
        morn: 283.86,
      },
      feels_like: { day: 280.84, night: 276.86, eve: 282.31, morn: 283.41 },
      pressure: 1016,
      humidity: 96,
      dew_point: 281.57,
      wind_speed: 4.87,
      wind_deg: 255,
      wind_gust: 10.39,
      weather: [
        { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
      ],
      clouds: 100,
      pop: 1,
      rain: 15.11,
      uvi: 4,
    },
    {
      dt: 1622026800,
      sunrise: 1621998339,
      sunset: 1622055928,
      moonrise: 1622057160,
      moonset: 1621998180,
      moon_phase: 0.5,
      temp: {
        day: 284.38,
        min: 278.99,
        max: 285.38,
        night: 278.99,
        eve: 282.75,
        morn: 281.44,
      },
      feels_like: { day: 283.62, night: 277.19, eve: 281.42, morn: 278.83 },
      pressure: 1020,
      humidity: 79,
      dew_point: 280.39,
      wind_speed: 5.97,
      wind_deg: 238,
      wind_gust: 12.56,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 70,
      pop: 0.97,
      rain: 2.72,
      uvi: 4,
    },
    {
      dt: 1622113200,
      sunrise: 1622084679,
      sunset: 1622142401,
      moonrise: 1622148600,
      moonset: 1622086740,
      moon_phase: 0.54,
      temp: {
        day: 283.56,
        min: 277.23,
        max: 285.44,
        night: 279.23,
        eve: 283.14,
        morn: 281.08,
      },
      feels_like: { day: 282.64, night: 277.17, eve: 281.4, morn: 278.12 },
      pressure: 1023,
      humidity: 76,
      dew_point: 279.12,
      wind_speed: 6.37,
      wind_deg: 290,
      wind_gust: 9.35,
      weather: [
        { id: 500, main: "Rain", description: "light rain", icon: "10d" },
      ],
      clouds: 95,
      pop: 0.97,
      rain: 1.8,
      uvi: 4,
    },
  ],
};

export const city: CityReport[] = [
  {
    name: "Direktionsbezirk Chemnitz",
    local_names: {
      ascii: "Direktionsbezirk Chemnitz",
      de: "Direktionsbezirk Chemnitz",
      feature_name: "Direktionsbezirk Chemnitz",
      fr: "District de Chemnitz",
      it: "Chemnitz",
    },
    lat: 50.6667,
    lon: 12.75,
    country: "DE",
  } as CityReport,
];