import React from 'react';
interface ModalProperties {
  title: string;
  content: any;
  onButtonClick: (event: React.MouseEvent) => void;
}
export default ModalProperties;