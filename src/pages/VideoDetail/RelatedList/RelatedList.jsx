import React from 'react';
import { Link } from 'react-router-dom';
import {
  RelatedVideoItem,
  RelatedVideoImage,
  RelatedVideoInfo,
  RelatedVideoTitle,
  RelatedVideoChannelTitle,
} from '../VideoDetail.style';

const RelatedList = ({ list }) => {
  return list.map((related) => (
    <Link role="listitem" to={`/play/${related.id.videoId}`} key={related.id.videoId}>
      <RelatedVideoItem>
        <RelatedVideoImage>
          <img alt={related.snippet.title} src={related.snippet.thumbnails.medium.url} />
        </RelatedVideoImage>
        <RelatedVideoInfo>
          <RelatedVideoTitle>{related.snippet.title}</RelatedVideoTitle>
          <RelatedVideoChannelTitle>
            {related.snippet.channelTitle}
          </RelatedVideoChannelTitle>
        </RelatedVideoInfo>
      </RelatedVideoItem>
    </Link>
  ));
};

export default RelatedList;
