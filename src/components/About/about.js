import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="pt-36 pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h3 className="font-bold text-primary text-lg mb-1">
              Tentang Saya
            </h3>
            <h2 className="font-bold text-secondary text-3xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <p className="text-third">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              molestias praesentium, adipisci obcaecati fuga blanditiis officia.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-secondary text-2xl mb-4">Mari Berteman</h3>
            <p className="font-medium text-base text-third mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              molestias praesentium, adipisci obcaecati fuga blanditiis officia.
            </p>
            <div className="flex items-center">
                <a href="https://ig.com" className='text-2xl p-2 mr-2 rounded-full border border-secondary hover:bg-primary hover:text-white'><FaInstagram /></a>
                <a href="https://ig.com" className='text-2xl p-2 mr-2 rounded-full border border-secondary hover:bg-primary hover:text-white'><FaGithub /></a>
                <a href="https://ig.com" className='text-2xl p-2 rounded-full border border-secondary hover:bg-primary hover:text-white'><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;