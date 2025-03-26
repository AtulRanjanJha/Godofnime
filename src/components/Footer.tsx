
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isWatchPage = location.pathname.includes("/watch/");
  
  return (
    <footer className={`w-full bg-background py-10 ${isWatchPage ? 'bg-gradient-to-b from-zinc-950 to-black text-zinc-400' : 'mt-16'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {isWatchPage ? (
          <div>
            <p className="text-sm mb-4">
              <strong>Disclaimer:</strong> アニメHub does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
            </p>
            <p className="text-center text-xs">
              &copy; {currentYear} アニメHub. All rights reserved.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">アニメHub</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Your destination for watching the best anime content online. 
                  Discover new series, movies, and classics.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-sm text-gray-500 hover:text-primary">Home</Link>
                  </li>
                  <li>
                    <Link to="/trending" className="text-sm text-gray-500 hover:text-primary">Trending</Link>
                  </li>
                  <li>
                    <Link to="/top-rated" className="text-sm text-gray-500 hover:text-primary">Top Rated</Link>
                  </li>
                  <li>
                    <Link to="/tv" className="text-sm text-gray-500 hover:text-primary">TV Shows</Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Comments</h3>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <p className="text-sm mb-2">Share your thoughts:</p>
                  <textarea 
                    className="w-full p-2 text-sm rounded-md h-20 bg-background border resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Leave a comment (Note: Not functional in this demo)"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div className="text-sm text-gray-500">
              <p className="mb-4">
                <strong>Disclaimer:</strong> アニメHub does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
              </p>
              
              <h4 className="font-semibold mb-2">Terms and Conditions:</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>All content provided is for informational and entertainment purposes only.</li>
                <li>Users are responsible for verifying the legality of content in their jurisdiction.</li>
                <li>We make no guarantees regarding the accuracy or availability of content.</li>
                <li>By using this service, you agree to these terms and conditions.</li>
              </ul>
              
              <p className="text-center pt-4">
                &copy; {currentYear} アニメHub. All rights reserved.
              </p>
            </div>
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;
