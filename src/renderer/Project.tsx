import Roadmap from 'components/Roadmap';
import moment from 'moment';

export default function Project() {
  return (
    <>
      <div>
        <h1 className="text-2xl tracking-wider underline font-bold">
          Project #1
        </h1>
        <span className="text-xs">
          Last updated {moment().startOf('hour').fromNow()}
        </span>
      </div>
      <Roadmap />
    </>
  );
}
