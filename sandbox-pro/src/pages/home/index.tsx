import './index.less';
import './button.less';

export default function IndexPage() {
  return (
    <div className='flex-grow flex-shrink-0'>

      <div className='text-sm text-white text-center mb-4 px-6 py-5 text-base [alert-purple]' role='alert'>
        <span className='text-sm text-primary-500 uppercase font-bold py-1.5 px-2.5 border bordered rounded-lg my-bg-white mr-3'>update 2.0.0</span>
        Now with new demos, features and elements!
      </div>


      <button className='btn'>Click Me</button>

    </div>
  );
}
