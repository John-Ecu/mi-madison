interface DeerIconProps {
  className?: string;
}

const DeerIcon = ({ className = "w-12 h-12" }: DeerIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C13.1 2 14 2.9 14 4V5.5L16.5 3.5C17.3 2.9 18.4 3.1 18.9 3.9C19.4 4.7 19.2 5.8 18.4 6.3L15.5 8.1C15.8 8.7 16 9.3 16 10V11H17C18.1 11 19 11.9 19 13S18.1 15 17 15H16V16C16 17.1 15.1 18 14 18H13V20C13 21.1 12.1 22 11 22S9 21.1 9 22V20H8C6.9 20 6 19.1 6 18V16H5C3.9 16 3 15.1 3 14S3.9 12 5 12H6V11C6 10.3 6.2 9.7 6.5 9.1L3.6 7.3C2.8 6.8 2.6 5.7 3.1 4.9C3.6 4.1 4.7 3.9 5.5 4.4L8 6.5V5C8 3.9 8.9 3 10 3H12V2M9 8V11C9 11.6 9.4 12 10 12S11 11.6 11 12V9C11 8.4 10.6 8 10 8S9 8.4 9 8M13 8V11C13 11.6 13.4 12 14 12S15 11.6 15 12V9C15 8.4 14.6 8 14 8S13 8.4 13 8Z"/>
      <path d="M7 6L9 7.5L7.5 8.5L5.5 7L7 6Z"/>
      <path d="M17 6L15 7.5L16.5 8.5L18.5 7L17 6Z"/>
    </svg>
  );
};

export default DeerIcon;