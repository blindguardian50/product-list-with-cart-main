import {useBreakpointValue} from "@chakra-ui/react";

type DeviceResolution = 'mobile' | 'tablet' | 'desktop'

export const useDeviceType = () => {
  return useBreakpointValue<DeviceResolution>({
    base: 'mobile', // Mobile
    sm: 'tablet', // Tablets and small desktops
    lg: 'desktop', // large desktops
  });
}
