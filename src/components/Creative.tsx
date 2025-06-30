
import React from 'react';

const Creative = () => {
  return (
    <section id="creative" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Creative Expression</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My passion for dance brings rhythm, creativity, and artistic expression to everything I do, 
            including my approach to coding and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-900">Dance & Development</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Just like in dance, coding requires rhythm, precision, and creative expression. 
              My background in dance has taught me discipline, attention to detail, and the 
              ability to think creatively under pressure—skills that translate perfectly into 
              software development.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              The choreographic process of breaking down complex movements into simple steps 
              mirrors how I approach coding challenges: decomposing problems into manageable 
              components and building elegant solutions step by step.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-rose-50 p-6 rounded-xl text-center dance-hover cursor-pointer">
                <div className="text-3xl mb-2">💃</div>
                <div className="font-semibold text-gray-800">Rhythm</div>
                <div className="text-gray-600 text-sm">in Code Structure</div>
              </div>
              <div className="bg-rose-50 p-6 rounded-xl text-center dance-hover cursor-pointer">
                <div className="text-3xl mb-2">🎨</div>
                <div className="font-semibold text-gray-800">Creativity</div>
                <div className="text-gray-600 text-sm">in Problem Solving</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl animate-pulse">💫</div>
                  <div className="text-xl font-semibold text-gray-800">Movement & Motion</div>
                  <div className="text-gray-600">Bringing life to digital experiences</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-white/30 rounded-full float-animation"></div>
              <div className="absolute top-12 right-8 w-6 h-6 bg-white/40 rounded-full float-animation" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-8 left-12 w-10 h-10 bg-white/20 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-16 right-4 w-4 h-4 bg-white/50 rounded-full float-animation" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            How Dance Influences My Code
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto dance-hover cursor-pointer">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-gray-800">Fluid Animations</h4>
              <p className="text-gray-600 text-sm">
                Creating smooth, natural transitions that feel choreographed
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto dance-hover cursor-pointer">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-gray-800">Precise Timing</h4>
              <p className="text-gray-600 text-sm">
                Understanding the importance of timing in user interactions
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto dance-hover cursor-pointer">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-semibold text-gray-800">Expressive Design</h4>
              <p className="text-gray-600 text-sm">
                Infusing personality and emotion into digital experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creative;
