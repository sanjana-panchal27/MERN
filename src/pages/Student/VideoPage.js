import React from 'react';
import { useParams } from 'react-router-dom';
import './VideoPage.css';

const videos = {
  'resume-tips': {
    title: 'Resume Tips',
    videos: [
      {
        videoUrl: 'https://www.youtube.com/embed/lWFbwcjWtmg',
        link: 'https://youtu.be/lWFbwcjWtmg?si=u0g0sWpChXKgMEnV',
      },
      {
        videoUrl: 'https://www.youtube.com/embed/G2_0kqrwAAw',
        link: 'https://youtu.be/G2_0kqrwAAw?si=iJ-IVfCmoSBj8H4Z',
      },
      {
        videoUrl: 'https://www.youtube.com/embed/QnUI3sLZ4hc',
        link: 'https://youtu.be/QnUI3sLZ4hc?si=w3-dxUej0bYSaeM1',
      },
      {
        videoUrl: 'https://www.youtube.com/embed/eSs68R4zhLI',
        link: 'https://youtu.be/eSs68R4zhLI?si=PGWOPzruW1_VBm73',
      },
    ],
  },
  'interview-prep': {
    title: 'Interview Preparation',
    videos: [
      {
        videoUrl: 'https://www.youtube.com/embed/Ji46s5BHdr0',
        link: 'https://youtu.be/Ji46s5BHdr0?si=MkW4w58lNF4QYwjH',
      },
    ],
  },
  'aptitude-tests': {
    title: 'Aptitude & Technical Tests',
    videos: [
      {
        videoUrl: 'https://www.youtube.com/embed/G4st5-0LYso',
        link: 'https://youtu.be/G4st5-0LYso?si=yLvZ7sKQi_9Isq4t',
      },
    ],
  },
  'internship-portals': {
    title: 'Internship & Job Portals',
    videos: [],
    link: 'https://www.linkedin.com/',
  },
  'career-guidance': {
    title: 'Career Guidance',
    videos: [
      {
        videoUrl: 'https://www.youtube.com/embed/O3m14PVOq_g',
        link: 'https://youtu.be/O3m14PVOq_g?si=8Chf8Con5X7K_AF8',
      },
    ],
  },
  'webinars-workshops': {
    title: 'Webinars & Workshops',
    videos: [],
    link: 'https://www.linkedin.com/',
  },
  'company-insights': {
    title: 'Company Insights',
    videos: [],
    link: 'https://www.google.com/',
  },
};

const VideoPage = () => {
  const { videoId } = useParams();
  const video = videos[videoId];

  if (!video) return <div>Video not found!</div>;

  return (
    <div className="video-page-container">
      {video.videos && video.videos.length > 0 ? (
        video.videos.map((vid, index) => (
          <div className="video-card" key={index}>
            <iframe
              src={vid.videoUrl}
              title={`${video.title} ${index + 1}`}
              frameBorder="0"
              allowFullScreen
            />
            <p className="video-link">
              <a href={vid.link} target="_blank" rel="noopener noreferrer">
                Watch Here
              </a>
            </p>
          </div>
        ))
      ) : (
        <div className="video-card">
          <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>
            {video.title}
          </h2>
          <div className="coming-soon">
            <p>🚧 This resource is currently not available.</p>
            <p>🔜 Stay tuned — exciting content is coming soon!</p>
            {video.link && (
              <p className="video-link">
                <a href={video.link} target="_blank" rel="noopener noreferrer">
                  Visit External Link
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
