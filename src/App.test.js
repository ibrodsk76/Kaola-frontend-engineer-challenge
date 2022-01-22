import { render, screen, fireEvent } from "@testing-library/react";
import { Countdown } from "./components/countdown/Countdown";
import { MockTheme } from "./Mock-data/web-config";
import { TimerDisplay } from "./components/Timer/TimerDisplay";
import userEvent from "@testing-library/user-event";

describe("renders Countdown", () => {

  it('should render logo, label, and time input control', () => {
    render(<MockTheme><Countdown /></MockTheme>);
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByText(/Enter the Deadline/i)).toBeInTheDocument();
    expect(screen.getByTestId('deadlinetime')).toBeInTheDocument();
    expect(screen.queryByText(/Time to deadline/i)).toBeNull();
  });

  it('should render timer when start button clicked and hide when stop button clicked', () => {
    render(<MockTheme><Countdown /></MockTheme>);
    let deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    let formattedDate = new Date(deadline.toString().split('GMT')[0]+' UTC').toISOString().split('.')[0];
    const input = screen.getByTestId('deadlinetime');
    fireEvent.change(input, {target: {value: formattedDate}});
    const startbutton = screen.getByTestId('startbutton');
    expect(startbutton).toBeInTheDocument();
		fireEvent.click(startbutton);
    expect(screen.queryByText(/Time to deadline/i)).toBeInTheDocument();
    const stopbutton = screen.getByTestId('stopbutton');
    expect(stopbutton).toBeInTheDocument();
		fireEvent.click(stopbutton);
    expect(screen.queryByText(/Time to deadline/i)).toBeNull();
  });

  function calculate_time(deadline, currentTime)
  {
    var end = new Date(deadline);
    var period = end.getTime() - currentTime.getTime();    
    var seconds = Number(period/1000);
    var d = Math.floor(seconds / (3600*24));
    var h = Math.floor(seconds % (3600*24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);

    return `${d} days ${h} hours ${m} minutes ${s} seconds`;
  }

  it('timer should display the correct time', () => {
    const currentTime = new Date();
    let deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    const time = calculate_time(deadline, currentTime);
    render(<MockTheme><TimerDisplay deadline={deadline} currentTime={currentTime} onDone={()=>{}}>
          </TimerDisplay></MockTheme>);
    expect(screen.getByText(/1 days 0 hours 0 minutes 0 seconds/i)).toBeInTheDocument();
  }); 

   it('should display DEADLINE PASSED when deadline before current date', () => {
     render(<MockTheme><Countdown /></MockTheme>);
     const input = screen.getByTestId('deadlinetime');
     fireEvent.change(input, {target: {value: '2022-01-21T21:09'}});
     fireEvent.click(screen.getByTestId('startbutton'));
     expect(screen.getByText(/DEADLINE PASSED!!!/i)).toBeInTheDocument();
   }); 
  });
