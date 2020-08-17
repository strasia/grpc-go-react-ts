// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.23.0
// 	protoc        v3.6.1
// source: covid19api.proto

package covid19api

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type ApiRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Country string `protobuf:"bytes,1,opt,name=country,proto3" json:"country,omitempty"`
	Status  string `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *ApiRequest) Reset() {
	*x = ApiRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_covid19api_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiRequest) ProtoMessage() {}

func (x *ApiRequest) ProtoReflect() protoreflect.Message {
	mi := &file_covid19api_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiRequest.ProtoReflect.Descriptor instead.
func (*ApiRequest) Descriptor() ([]byte, []int) {
	return file_covid19api_proto_rawDescGZIP(), []int{0}
}

func (x *ApiRequest) GetCountry() string {
	if x != nil {
		return x.Country
	}
	return ""
}

func (x *ApiRequest) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

type ApiCountries struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Item []*ApiCountries_Item `protobuf:"bytes,1,rep,name=item,proto3" json:"item,omitempty"`
}

func (x *ApiCountries) Reset() {
	*x = ApiCountries{}
	if protoimpl.UnsafeEnabled {
		mi := &file_covid19api_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiCountries) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiCountries) ProtoMessage() {}

func (x *ApiCountries) ProtoReflect() protoreflect.Message {
	mi := &file_covid19api_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiCountries.ProtoReflect.Descriptor instead.
func (*ApiCountries) Descriptor() ([]byte, []int) {
	return file_covid19api_proto_rawDescGZIP(), []int{1}
}

func (x *ApiCountries) GetItem() []*ApiCountries_Item {
	if x != nil {
		return x.Item
	}
	return nil
}

type ApiSummary struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Global    *ApiSummary_Item   `protobuf:"bytes,1,opt,name=Global,proto3" json:"Global,omitempty"`
	Countries []*ApiSummary_Item `protobuf:"bytes,2,rep,name=Countries,proto3" json:"Countries,omitempty"`
	Date      string             `protobuf:"bytes,3,opt,name=Date,proto3" json:"Date,omitempty"`
}

func (x *ApiSummary) Reset() {
	*x = ApiSummary{}
	if protoimpl.UnsafeEnabled {
		mi := &file_covid19api_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiSummary) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiSummary) ProtoMessage() {}

func (x *ApiSummary) ProtoReflect() protoreflect.Message {
	mi := &file_covid19api_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiSummary.ProtoReflect.Descriptor instead.
func (*ApiSummary) Descriptor() ([]byte, []int) {
	return file_covid19api_proto_rawDescGZIP(), []int{2}
}

func (x *ApiSummary) GetGlobal() *ApiSummary_Item {
	if x != nil {
		return x.Global
	}
	return nil
}

func (x *ApiSummary) GetCountries() []*ApiSummary_Item {
	if x != nil {
		return x.Countries
	}
	return nil
}

func (x *ApiSummary) GetDate() string {
	if x != nil {
		return x.Date
	}
	return ""
}

type ApiCountries_Item struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Country string `protobuf:"bytes,1,opt,name=Country,proto3" json:"Country,omitempty"`
	Slug    string `protobuf:"bytes,2,opt,name=Slug,proto3" json:"Slug,omitempty"`
	ISO2    string `protobuf:"bytes,3,opt,name=ISO2,proto3" json:"ISO2,omitempty"`
}

func (x *ApiCountries_Item) Reset() {
	*x = ApiCountries_Item{}
	if protoimpl.UnsafeEnabled {
		mi := &file_covid19api_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiCountries_Item) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiCountries_Item) ProtoMessage() {}

func (x *ApiCountries_Item) ProtoReflect() protoreflect.Message {
	mi := &file_covid19api_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiCountries_Item.ProtoReflect.Descriptor instead.
func (*ApiCountries_Item) Descriptor() ([]byte, []int) {
	return file_covid19api_proto_rawDescGZIP(), []int{1, 0}
}

func (x *ApiCountries_Item) GetCountry() string {
	if x != nil {
		return x.Country
	}
	return ""
}

func (x *ApiCountries_Item) GetSlug() string {
	if x != nil {
		return x.Slug
	}
	return ""
}

func (x *ApiCountries_Item) GetISO2() string {
	if x != nil {
		return x.ISO2
	}
	return ""
}

type ApiSummary_Item struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Country        string `protobuf:"bytes,1,opt,name=Country,proto3" json:"Country,omitempty"`
	CountryCode    string `protobuf:"bytes,2,opt,name=CountryCode,proto3" json:"CountryCode,omitempty"`
	Slug           string `protobuf:"bytes,3,opt,name=Slug,proto3" json:"Slug,omitempty"`
	NewConfirmed   int32  `protobuf:"varint,4,opt,name=NewConfirmed,proto3" json:"NewConfirmed,omitempty"`
	NewDeaths      int32  `protobuf:"varint,5,opt,name=NewDeaths,proto3" json:"NewDeaths,omitempty"`
	NewRecovered   int32  `protobuf:"varint,6,opt,name=NewRecovered,proto3" json:"NewRecovered,omitempty"`
	TotalConfirmed int32  `protobuf:"varint,7,opt,name=TotalConfirmed,proto3" json:"TotalConfirmed,omitempty"`
	TotalDeaths    int32  `protobuf:"varint,8,opt,name=TotalDeaths,proto3" json:"TotalDeaths,omitempty"`
	TotalRecovered int32  `protobuf:"varint,9,opt,name=TotalRecovered,proto3" json:"TotalRecovered,omitempty"`
	Date           string `protobuf:"bytes,10,opt,name=Date,proto3" json:"Date,omitempty"`
}

func (x *ApiSummary_Item) Reset() {
	*x = ApiSummary_Item{}
	if protoimpl.UnsafeEnabled {
		mi := &file_covid19api_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ApiSummary_Item) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ApiSummary_Item) ProtoMessage() {}

func (x *ApiSummary_Item) ProtoReflect() protoreflect.Message {
	mi := &file_covid19api_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ApiSummary_Item.ProtoReflect.Descriptor instead.
func (*ApiSummary_Item) Descriptor() ([]byte, []int) {
	return file_covid19api_proto_rawDescGZIP(), []int{2, 0}
}

func (x *ApiSummary_Item) GetCountry() string {
	if x != nil {
		return x.Country
	}
	return ""
}

func (x *ApiSummary_Item) GetCountryCode() string {
	if x != nil {
		return x.CountryCode
	}
	return ""
}

func (x *ApiSummary_Item) GetSlug() string {
	if x != nil {
		return x.Slug
	}
	return ""
}

func (x *ApiSummary_Item) GetNewConfirmed() int32 {
	if x != nil {
		return x.NewConfirmed
	}
	return 0
}

func (x *ApiSummary_Item) GetNewDeaths() int32 {
	if x != nil {
		return x.NewDeaths
	}
	return 0
}

func (x *ApiSummary_Item) GetNewRecovered() int32 {
	if x != nil {
		return x.NewRecovered
	}
	return 0
}

func (x *ApiSummary_Item) GetTotalConfirmed() int32 {
	if x != nil {
		return x.TotalConfirmed
	}
	return 0
}

func (x *ApiSummary_Item) GetTotalDeaths() int32 {
	if x != nil {
		return x.TotalDeaths
	}
	return 0
}

func (x *ApiSummary_Item) GetTotalRecovered() int32 {
	if x != nil {
		return x.TotalRecovered
	}
	return 0
}

func (x *ApiSummary_Item) GetDate() string {
	if x != nil {
		return x.Date
	}
	return ""
}

var File_covid19api_proto protoreflect.FileDescriptor

var file_covid19api_proto_rawDesc = []byte{
	0x0a, 0x10, 0x63, 0x6f, 0x76, 0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0a, 0x63, 0x6f, 0x76, 0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69, 0x22, 0x3e,
	0x0a, 0x0a, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x18, 0x0a, 0x07,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x8b,
	0x01, 0x0a, 0x0c, 0x41, 0x70, 0x69, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x69, 0x65, 0x73, 0x12,
	0x31, 0x0a, 0x04, 0x69, 0x74, 0x65, 0x6d, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x1d, 0x2e,
	0x63, 0x6f, 0x76, 0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x43, 0x6f,
	0x75, 0x6e, 0x74, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x49, 0x74, 0x65, 0x6d, 0x52, 0x04, 0x69, 0x74,
	0x65, 0x6d, 0x1a, 0x48, 0x0a, 0x04, 0x49, 0x74, 0x65, 0x6d, 0x12, 0x18, 0x0a, 0x07, 0x43, 0x6f,
	0x75, 0x6e, 0x74, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x43, 0x6f, 0x75,
	0x6e, 0x74, 0x72, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x53, 0x6c, 0x75, 0x67, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x53, 0x6c, 0x75, 0x67, 0x12, 0x12, 0x0a, 0x04, 0x49, 0x53, 0x4f, 0x32,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x49, 0x53, 0x4f, 0x32, 0x22, 0xd5, 0x03, 0x0a,
	0x0a, 0x41, 0x70, 0x69, 0x53, 0x75, 0x6d, 0x6d, 0x61, 0x72, 0x79, 0x12, 0x33, 0x0a, 0x06, 0x47,
	0x6c, 0x6f, 0x62, 0x61, 0x6c, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x63, 0x6f,
	0x76, 0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x53, 0x75, 0x6d, 0x6d,
	0x61, 0x72, 0x79, 0x2e, 0x49, 0x74, 0x65, 0x6d, 0x52, 0x06, 0x47, 0x6c, 0x6f, 0x62, 0x61, 0x6c,
	0x12, 0x39, 0x0a, 0x09, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x69, 0x65, 0x73, 0x18, 0x02, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x1b, 0x2e, 0x63, 0x6f, 0x76, 0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69,
	0x2e, 0x41, 0x70, 0x69, 0x53, 0x75, 0x6d, 0x6d, 0x61, 0x72, 0x79, 0x2e, 0x49, 0x74, 0x65, 0x6d,
	0x52, 0x09, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x69, 0x65, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x44,
	0x61, 0x74, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x44, 0x61, 0x74, 0x65, 0x1a,
	0xc2, 0x02, 0x0a, 0x04, 0x49, 0x74, 0x65, 0x6d, 0x12, 0x18, 0x0a, 0x07, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x72, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x43, 0x6f, 0x75, 0x6e, 0x74,
	0x72, 0x79, 0x12, 0x20, 0x0a, 0x0b, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x43, 0x6f, 0x64,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79,
	0x43, 0x6f, 0x64, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x53, 0x6c, 0x75, 0x67, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x53, 0x6c, 0x75, 0x67, 0x12, 0x22, 0x0a, 0x0c, 0x4e, 0x65, 0x77, 0x43,
	0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x65, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c,
	0x4e, 0x65, 0x77, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x65, 0x64, 0x12, 0x1c, 0x0a, 0x09,
	0x4e, 0x65, 0x77, 0x44, 0x65, 0x61, 0x74, 0x68, 0x73, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x09, 0x4e, 0x65, 0x77, 0x44, 0x65, 0x61, 0x74, 0x68, 0x73, 0x12, 0x22, 0x0a, 0x0c, 0x4e, 0x65,
	0x77, 0x52, 0x65, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x65, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x0c, 0x4e, 0x65, 0x77, 0x52, 0x65, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x65, 0x64, 0x12, 0x26,
	0x0a, 0x0e, 0x54, 0x6f, 0x74, 0x61, 0x6c, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x72, 0x6d, 0x65, 0x64,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x54, 0x6f, 0x74, 0x61, 0x6c, 0x43, 0x6f, 0x6e,
	0x66, 0x69, 0x72, 0x6d, 0x65, 0x64, 0x12, 0x20, 0x0a, 0x0b, 0x54, 0x6f, 0x74, 0x61, 0x6c, 0x44,
	0x65, 0x61, 0x74, 0x68, 0x73, 0x18, 0x08, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x54, 0x6f, 0x74,
	0x61, 0x6c, 0x44, 0x65, 0x61, 0x74, 0x68, 0x73, 0x12, 0x26, 0x0a, 0x0e, 0x54, 0x6f, 0x74, 0x61,
	0x6c, 0x52, 0x65, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x65, 0x64, 0x18, 0x09, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x0e, 0x54, 0x6f, 0x74, 0x61, 0x6c, 0x52, 0x65, 0x63, 0x6f, 0x76, 0x65, 0x72, 0x65, 0x64,
	0x12, 0x12, 0x0a, 0x04, 0x44, 0x61, 0x74, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x44, 0x61, 0x74, 0x65, 0x32, 0x90, 0x01, 0x0a, 0x0a, 0x41, 0x70, 0x69, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x42, 0x0a, 0x0c, 0x67, 0x65, 0x74, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72,
	0x69, 0x65, 0x73, 0x12, 0x16, 0x2e, 0x63, 0x6f, 0x76, 0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69,
	0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x63, 0x6f,
	0x76, 0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x43, 0x6f, 0x75, 0x6e,
	0x74, 0x72, 0x69, 0x65, 0x73, 0x22, 0x00, 0x12, 0x3e, 0x0a, 0x0a, 0x67, 0x65, 0x74, 0x53, 0x75,
	0x6d, 0x6d, 0x61, 0x72, 0x79, 0x12, 0x16, 0x2e, 0x63, 0x6f, 0x76, 0x69, 0x64, 0x31, 0x39, 0x61,
	0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e,
	0x63, 0x6f, 0x76, 0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69, 0x2e, 0x41, 0x70, 0x69, 0x53, 0x75,
	0x6d, 0x6d, 0x61, 0x72, 0x79, 0x22, 0x00, 0x42, 0x0e, 0x5a, 0x0c, 0x2e, 0x3b, 0x63, 0x6f, 0x76,
	0x69, 0x64, 0x31, 0x39, 0x61, 0x70, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_covid19api_proto_rawDescOnce sync.Once
	file_covid19api_proto_rawDescData = file_covid19api_proto_rawDesc
)

func file_covid19api_proto_rawDescGZIP() []byte {
	file_covid19api_proto_rawDescOnce.Do(func() {
		file_covid19api_proto_rawDescData = protoimpl.X.CompressGZIP(file_covid19api_proto_rawDescData)
	})
	return file_covid19api_proto_rawDescData
}

var file_covid19api_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_covid19api_proto_goTypes = []interface{}{
	(*ApiRequest)(nil),        // 0: covid19api.ApiRequest
	(*ApiCountries)(nil),      // 1: covid19api.ApiCountries
	(*ApiSummary)(nil),        // 2: covid19api.ApiSummary
	(*ApiCountries_Item)(nil), // 3: covid19api.ApiCountries.Item
	(*ApiSummary_Item)(nil),   // 4: covid19api.ApiSummary.Item
}
var file_covid19api_proto_depIdxs = []int32{
	3, // 0: covid19api.ApiCountries.item:type_name -> covid19api.ApiCountries.Item
	4, // 1: covid19api.ApiSummary.Global:type_name -> covid19api.ApiSummary.Item
	4, // 2: covid19api.ApiSummary.Countries:type_name -> covid19api.ApiSummary.Item
	0, // 3: covid19api.ApiService.getCountries:input_type -> covid19api.ApiRequest
	0, // 4: covid19api.ApiService.getSummary:input_type -> covid19api.ApiRequest
	1, // 5: covid19api.ApiService.getCountries:output_type -> covid19api.ApiCountries
	2, // 6: covid19api.ApiService.getSummary:output_type -> covid19api.ApiSummary
	5, // [5:7] is the sub-list for method output_type
	3, // [3:5] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_covid19api_proto_init() }
func file_covid19api_proto_init() {
	if File_covid19api_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_covid19api_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_covid19api_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiCountries); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_covid19api_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiSummary); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_covid19api_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiCountries_Item); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_covid19api_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ApiSummary_Item); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_covid19api_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_covid19api_proto_goTypes,
		DependencyIndexes: file_covid19api_proto_depIdxs,
		MessageInfos:      file_covid19api_proto_msgTypes,
	}.Build()
	File_covid19api_proto = out.File
	file_covid19api_proto_rawDesc = nil
	file_covid19api_proto_goTypes = nil
	file_covid19api_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// ApiServiceClient is the client API for ApiService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ApiServiceClient interface {
	GetCountries(ctx context.Context, in *ApiRequest, opts ...grpc.CallOption) (*ApiCountries, error)
	GetSummary(ctx context.Context, in *ApiRequest, opts ...grpc.CallOption) (*ApiSummary, error)
}

type apiServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewApiServiceClient(cc grpc.ClientConnInterface) ApiServiceClient {
	return &apiServiceClient{cc}
}

func (c *apiServiceClient) GetCountries(ctx context.Context, in *ApiRequest, opts ...grpc.CallOption) (*ApiCountries, error) {
	out := new(ApiCountries)
	err := c.cc.Invoke(ctx, "/covid19api.ApiService/getCountries", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *apiServiceClient) GetSummary(ctx context.Context, in *ApiRequest, opts ...grpc.CallOption) (*ApiSummary, error) {
	out := new(ApiSummary)
	err := c.cc.Invoke(ctx, "/covid19api.ApiService/getSummary", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ApiServiceServer is the server API for ApiService service.
type ApiServiceServer interface {
	GetCountries(context.Context, *ApiRequest) (*ApiCountries, error)
	GetSummary(context.Context, *ApiRequest) (*ApiSummary, error)
}

// UnimplementedApiServiceServer can be embedded to have forward compatible implementations.
type UnimplementedApiServiceServer struct {
}

func (*UnimplementedApiServiceServer) GetCountries(context.Context, *ApiRequest) (*ApiCountries, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCountries not implemented")
}
func (*UnimplementedApiServiceServer) GetSummary(context.Context, *ApiRequest) (*ApiSummary, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSummary not implemented")
}

func RegisterApiServiceServer(s *grpc.Server, srv ApiServiceServer) {
	s.RegisterService(&_ApiService_serviceDesc, srv)
}

func _ApiService_GetCountries_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ApiRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiServiceServer).GetCountries(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/covid19api.ApiService/GetCountries",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiServiceServer).GetCountries(ctx, req.(*ApiRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ApiService_GetSummary_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ApiRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ApiServiceServer).GetSummary(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/covid19api.ApiService/GetSummary",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ApiServiceServer).GetSummary(ctx, req.(*ApiRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ApiService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "covid19api.ApiService",
	HandlerType: (*ApiServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "getCountries",
			Handler:    _ApiService_GetCountries_Handler,
		},
		{
			MethodName: "getSummary",
			Handler:    _ApiService_GetSummary_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "covid19api.proto",
}