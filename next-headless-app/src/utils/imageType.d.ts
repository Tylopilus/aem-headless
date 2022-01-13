export interface ImageType {
  'jcr:primaryType': string;
  'jcr:mixinTypes': string[];
  'jcr:createdBy': string;
  'jcr:created': string;
  'jcr:uuid': string;
  'jcr:content': JcrContent;
}

export interface JcrContent {
  'jcr:primaryType': string;
  'jcr:lastModifiedBy': string;
  'dam:assetState': string;
  'jcr:lastModified': string;
  renditions: Renditions;
  related: Related;
  metadata: Metadata;
}

export interface Renditions {
  'jcr:primaryType': string;
  'jcr:createdBy': string;
  'jcr:created': string;
}

export interface Related {
  'jcr:primaryType': string;
}

export interface Metadata {
  'jcr:primaryType': string;
  'jcr:mixinTypes': string[];
  'dam:Physicalheightininches': string;
  'tiff:Compression': number;
  'dam:Physicalwidthininches': string;
  'dam:JpgFromRawStart': number;
  'dam:Fileformat': string;
  'dam:Progressive': string;
  'tiff:ImageLength': number;
  'tiff:YResolution': string;
  'exif:ColorSpace': number;
  'xmp:CreatorTool': string;
  'dam:extracted': string;
  'dc:format': string;
  'dc:description': string;
  'dam:Bitsperpixel': number;
  'exif:ExifVersion': string;
  'xmpMM:DocumentID': string;
  'dam:MIMEtype': string;
  'tiff:Orientation': number;
  'exif:ExifImageWidth': number;
  'dam:JpgFromRawLength': number;
  'dam:Physicalwidthindpi': number;
  'dam:Physicalheightindpi': number;
  'tiff:ResolutionUnit': number;
  'xmpMM:OriginalDocumentID': string;
  'photoshop:ColorMode': number;
  'dam:Numberofimages': number;
  'tiff:XResolution': string;
  'exif:PixelYDimension': number;
  'dam:ExifOffset': number;
  'xmp:MetadataDate': string;
  'exif:PixelXDimension': number;
  'dam:Numberoftextualcomments': number;
  'xmpMM:InstanceID': string;
  'xmp:ModifyDate': string;
  'xmp:CreateDate': string;
  'tiff:ImageWidth': number;
  'dam:sha1': string;
  'dam:size': number;
  'dam:ColorSpace': number;
  'tiff:SamplesPerPixel': number;
  'dc:title': string;
  'tiff:PhotometricInterpretation': number;
  'exif:ExifImageLength': number;
}
