import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const Player = styled(ReactPlayer)`
  width: 100% !important;
  height: 250px !important;
`;

export const VideoTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  padding: 0px 10px;
`;

export const VideoDescriptionParagraph = styled.p`
  font-size: 12px;
  padding: 0px 10px;
`;

export const RelatedVideoImage = styled.section`
  flex: 2;

  && img {
    width: 100%;
    object-fit: cover;
  }
`;

export const RelatedVideoItem = styled.article`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const RelatedVideoInfo = styled.section`
  padding: 0px 10px;
  flex: 1;
`;

export const RelatedVideoTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 0px;
  color: ${({ theme }) => theme.videoCardTextColor};
`;

export const RelatedVideoChannelTitle = styled.h2`
  font-size: 13px;
  margin-top: 5px;
  color: ${({ theme }) => theme.videoCardChannelTextColor};
`;
