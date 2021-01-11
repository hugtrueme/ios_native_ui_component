//
//  RNTMapManager.m
//  wrap_mapview
//
//  Created by 鍾志豪 on 2021/1/8.
//

#import "RNTMapManager.h"
#import "RNTMapView.h"
#import "RCTConvert+Mapkit.h"

@implementation RNTMapManager : RCTViewManager

RCT_EXPORT_MODULE(RNTMap)
RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock)

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView)
{
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

- (UIView *)view
{
  RNTMapView *map = [RNTMapView new];
  map.delegate = self;
  return map;
}

#pragma mark MKMapViewDelegate

- (void)mapView: (RNTMapView*)mapView regionDidChangeAnimated:(BOOL)animated
{
  if (!mapView.onRegionChange) {
    return;
  }
  
  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{
    @"region": @{
        @"latitude": @(region.center.latitude),
        @"longitude": @(region.center.longitude),
        @"latitudeDelta": @(region.span.latitudeDelta),
        @"longitudeDelta": @(region.span.longitudeDelta),
    }
  });
}
@end
