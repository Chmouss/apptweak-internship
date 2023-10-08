//definition of types && attributes of the objects

/*
export type User = {
    "country": string,
    "display_name": string,
    "email": string,
    "explicit_content": { "filter_enabled": boolean, "filter_locked": boolean },
    "external_urls": { "spotify": string },
    "followers": { "href": string, "total": number },
    "href": string,
    "id": string,
    "images": [{
        "url": string,
        "height": number,
        "width": number
    }], "product": string,
    "type": string,
    "uri": string
};

export type SpotifyTrack = {
    "album": {
        "album_type": "album" | "single" | "compilation",
        "total_tracks": number,
        "available_markets": string[],
        "external_urls": {
            "spotify": string
        },
        "href": string,
        "id": string,
        "images": [
            {
                "url": string,
                "height": number,
                "width": number
            }
        ],
        "name": string,
        "release_date": string,
        "release_date_precision": "year" | "month" | "day",
        "restrictions": {
            "reason": "market" | "product" | "explicit",
        },
        "type": "album",
        "uri": string,
        "artists": [
            {
                "external_urls": {
                    "spotify": string
                },
                "href": string,
                "id": string,
                "name": string,
                "type": "artist",
                "uri": string
            }
        ]
    },
    "artists": [
        {
            "external_urls": {
                "spotify": string
            },
            "followers": {
                "href": string,
                "total": number
            },
            "genres": string[],
            "href": string,
            "id": string,
            "images": [
                {
                    "url": string,
                    "height": number,
                    "width": number
                }
            ],
            "name": string,
            "popularity": number,
            "type": "artist",
            "uri": string
        }
    ],
    "available_markets": [
        string
    ],
    "disc_number": number,
    "duration_ms": number,
    "explicit": boolean,
    "external_ids": {
        "isrc": string,
        "ean": string,
        "upc": string
    },
    "external_urls": {
        "spotify": string
    },
    "href": string,
    "id": string,
    "is_playable": boolean,
    "linked_from": {},
    "restrictions": {
        "reason": string
    },
    "name": string,
    "popularity": number,
    "preview_url": string,
    "track_number": number,
    "type": "track",
    "uri": string,
    "is_local": boolean
};

export type SpotifyTrackItem = {
    "added_at": string,
    "added_by": {
        "external_urls": {
            "spotify": string
        },
        "followers": {
            "href": string,
            "total": number
        },
        "href": string,
        "id": string,
        "type": "user",
        "uri": string
    },
    "is_local": boolean,
    "track": SpotifyTrack
};

export type SpotifyPlaylist = {
    href: string,
    items:{
    "collaborative": boolean,
    "description": string,
    "external_urls": {
        "spotify": string
    },
    "followers": {
        "href": string,
        "total": number
    },
    "href": string,
    "id": string,
    "images": [
        {
            "url": string,
            "height": number,
            "width": number
        }
    ],
    "name": string,
    "owner": {
        "external_urls": {
            "spotify": string
        },
        "followers": {
            "href": string,
            "total": number
        },
        "href": string,
        "id": string,
        "type": "user",
        "uri": string,
        "display_name": string
    },
    "public": boolean,
    "snapshot_id": string,
    "tracks": {
        "href": string,
        "limit": number,
        "next": string,
        "offset": number,
        "previous": string,
        "total": number,
        "items": SpotifyTrackItem[]
    },
    "type": string,
    "uri": string
}[],
limit: number,
next: string | null,
offset: number,
previous: string | null,
total: number
};
*/

export type User = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: { filter_enabled: boolean; filter_locked: boolean };
  external_urls: { spotify: string };
  followers: { href: string; total: number };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
};

export type SpotifyCompletePlaylist = {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  owner: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
  };
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: SpotifyPlaylistTrack[];
  };
  type: string;
  uri: string;
};

export type SpotifyPlaylistTrack = {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  track: SpotifyTrack;
};

export type SpotifyTrack = {
  album: SpotifyAlbum;
  artists: SpotifyCompleteArtists[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: {};
  restrictions: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

export type SpotifyAlbum = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  type: string;
  uri: string;
  artists: SpotifyBaseArtists[];
};

export type SpotifyBaseArtists = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type SpotifyCompleteArtists = SpotifyBaseArtists &
  SpotifyArtistComplementaryInformation;

export type SpotifyArtistComplementaryInformation = {
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  popularity: number;
};

export type SpotifyPlaylist = {
  href: string;
  items: {
    collaborative: boolean;
    description: string;
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    href: string;
    id: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
    name: string;
    owner: {
      external_urls: {
        spotify: string;
      };
      followers: {
        href: string;
        total: number;
      };
      href: string;
      id: string;
      type: "user";
      uri: string;
      display_name: string;
    };
    public: boolean;
    snapshot_id: string;
    tracks: {
      href: string;
      limit: number;
      next: string;
      offset: number;
      previous: string;
      total: number;
      items: SpotifyPlaylistTrack[];
    };
    type: string;
    uri: string;
  }[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
};

export type SpotifySearchedTracks = SpotifyTrack[];
