import React from "react";
import ArtikelCard from "../components/ArtikelCard";

const Home = () => {
  const blogsArray = [
    {
      title: "My new Website",
      body: "UART – These are D0 (RX) and D1 (TX)., used to receive (RX) and transmit (TX) TTL serial data. These pins are connected to the pins of an onboard FTDI USB-to-TTL Serial converter chip. PWM – In the Nano, pins D3, D5, D6, D9, D10, and D11 provide an 8-bit PWM output. In the Nano Every, there are only five pins allocated to PWM: D3, D5, D6, D9, and D10. SPI – SPI communication is provided by D10 (SS), D11 (MOSI/COPI), D12 (MISO/CIPO), and D13 (SCK) on both boards. On both boards, the on-board LED is connected to D13.The Nano and Nano Every each have 8 analog inputs (A0 through A7). ach pin provides 10bits of resolution that enables 108 = 1024 different values for input. The default range forthe operational voltage for these pins is 0 V to 5 V. You can change the upper range from5 V to your desired value by programming.In the Nano, pins A0 to A5 can also be configured as digital pins D14 through D19.In the Nano Every, pins A0 to A7 can also be configured as digital pins D14 through D21.I2C – This functionality is provided by the pins labelled A4/D18 (SDA) and A5/D19 (SCL).They support I2C using the Two Wire Interface (TWI) and use the Wire library.These are all the important pins on both MCU boards. There are more pins and more meanings to the pins. However, I will not be covering most of those concepts, as they are really out of the scope of this book.Powering the Nano and Nano Every MCU boards You can power a Nano withbuilt-in USB with a Mini B type cable and a Nano Every with a USB Micro B type cable as shown in Figure 1-4.",
      author: "Mo",
      id: 1,
      date: new Date(),
    },
    {
      title: "My second Website",
      body: "lorem ipsum dolor sit amet",
      author: "No",
      id: 2,
      date: new Date(),
    },
    {
      title: "My third Website",
      body: "lorem ipsum dolor sit amet",
      author: "Mo",
      id: 3,
      date: new Date(),
    },
  ];
  return (
    <div className="Home">
      <div className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        <h1>Home</h1>
      </div>
      <ArtikelCard blogs={blogsArray} />
    </div>
  );
};

export default Home;
