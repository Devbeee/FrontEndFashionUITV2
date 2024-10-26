import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, Row, Col, Select } from "antd";
import axios from "axios";
import { ILocation } from "@/interfaces";
import { icons } from "@/utils";
import GoogleMapReact from "google-map-react";

type AnyReactComponentProps = {
    text: string;
    lat: number;
    lng: number;
  };

const AnyReactComponent = ({ text }: AnyReactComponentProps) => <div>{text}</div>;

type Location = {
    value: number;
    label: string;
}

const BASE_API_URL = 'https://provinces.open-api.vn/api'

export function StoreSystem() {
    const [filteredProvince, setFilteredProvince] = useState<Location[]>([]);
    const [filteredDistrict, setFilteredDistrict] = useState<Location[]>([]);
    const [filteredWard, setFilteredWard] = useState<Location[]>([]);

    const [selectedProvince, setSelectedProvince] = useState<Location | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<Location | null>(null);
    const [selectedWard, setSelectedWard] = useState<Location | null>(null);

    const [storeLocation, setStoreLocation] = useState<ILocation[]>([
        {
            id: 1,
            ward: "phường linh trung",
            district: "thành phố thủ đức",
            province: "thành phố hồ chí minh",
            addressDetail: "234",
            phoneNumber: "0123123123",
            longitude: 12,
            latitude: 12
        },
        {
            id: 2,
            ward: "xã ea tóh",
            district: "huyện krông năng",
            province: "tỉnh đắk lắk",
            addressDetail: "234",
            phoneNumber: "0123123123",
            longitude: 12,
            latitude: 12
        },
        {
            id: 3,
            ward: "phường linh trung",
            district: "thành phố thủ đức",
            province: "thành phố hồ chí minh",
            addressDetail: "234",
            phoneNumber: "0123123123",
            longitude: 12,
            latitude: 12
        },
        {
            id: 4,
            ward: "xã ea tóh",
            district: "huyện krông năng",
            province: "tỉnh đắk lắk",
            addressDetail: "234",
            phoneNumber: "0123123123",
            longitude: 12,
            latitude: 12
        },
    ])
    const [filteredStoreLocation, setFilteredStoreLocation] = useState<ILocation[]>([]);
    const [isFilter, setIsFilter] = useState<boolean>(false)

    const getProvince = async () => {
        const response = await axios.get(`${BASE_API_URL}/p/`);
        const provinces: Location[] = response.data.map((item: any) => ({
            value: item.code,
            label: item.name
        }));

        setFilteredProvince(provinces)
    }

    const getDistrict = async () => {
        const provinceCode = selectedProvince?.value;
        const response = await axios.get(`${BASE_API_URL}/p/${provinceCode}`, {
            params: {
                depth: 2,
            }
        });
        const districts: Location[] = response.data?.districts.map((item: any) => ({
            value: item?.code,
            label: item?.name
        }));
        setFilteredDistrict(districts)
    }

    const getWard = async () => {
        const districtCode = selectedDistrict?.value;
        const response = await axios.get(`${BASE_API_URL}/d/${districtCode}`, {
            params: {
                depth: 2,
            }
        });
        const wards: Location[] = response.data?.wards.map((item: any) => ({
            value: item?.code,
            label: item?.name
        }));
        setFilteredWard(wards)
    }

    const handleProvinceChange = (province: Location) => {
        setIsFilter(true)

        const filterStoreProvince = storeLocation.filter(item => item.province.toLowerCase() === province.label.toLowerCase())
        setFilteredStoreLocation(filterStoreProvince);
        setSelectedProvince(province)

        setSelectedDistrict(null);
        setFilteredDistrict([])

        setSelectedWard(null);
        setFilteredWard([]);
    }

    const handleDistrictChange = (district: Location) => {
        const filterStoreDistrict = storeLocation.filter(item => item.district.toLowerCase() === district.label.toLowerCase())
        setFilteredStoreLocation(filterStoreDistrict);
        setSelectedDistrict(district);

        setSelectedWard(null);
        setFilteredWard([]);
    }

    const handleWardChange = (ward: Location) => {
        const filterStoreWard = storeLocation.filter(item => item.ward.toLowerCase() === ward.label.toLowerCase())
        setFilteredStoreLocation(filterStoreWard);
        setSelectedWard(ward);
    }

    return (
        <div>
            <div className="bg-gray-100">
                <Breadcrumb
                    items={[
                        { title: <Link to="/home">Trang chủ</Link>, },
                        { title: "Hệ thống cửa hàng" },
                    ]}
                    className="w-1200 mx-auto py-3"
                />
            </div>
            <div className="w-1200 mx-auto my-2">
                <Row>
                    <Col span={8}>
                        <div className="bg-blue-cyan p-2.5">
                            <div className="mb-2 w-full">
                                <Select
                                    className="!w-full text-left"
                                    showSearch
                                    placeholder="Chọn tỉnh thành"
                                    optionFilterProp="label"
                                    onChange={(_, option) => handleProvinceChange(option as Location)}
                                    options={filteredProvince}
                                    onFocus={getProvince}
                                    value={selectedProvince}
                                    size="large"
                                />
                            </div>
                            <div className="mb-2 w-full">
                                <Select
                                    className="!w-full text-left"
                                    showSearch
                                    placeholder="Chọn quận huyện"
                                    optionFilterProp="label"
                                    onChange={(_, option) => handleDistrictChange(option as Location)}
                                    options={filteredDistrict}
                                    onFocus={getDistrict}
                                    value={selectedDistrict}
                                    size="large"
                                />
                            </div>
                            <div className="mb-2 w-full">
                                <Select
                                    className="!w-full text-left"
                                    showSearch
                                    placeholder="Chọn xã phường"
                                    optionFilterProp="label"
                                    onChange={(_, option) => handleWardChange(option as Location)}
                                    options={filteredWard}
                                    onFocus={getWard}
                                    value={selectedWard}
                                    size="large"
                                />
                            </div>
                            <div className="max-h-380 overflow-hidden overflow-y-auto mt-4 text-left">
                                {
                                    !isFilter ? storeLocation.map(store => (
                                        <div key={store.id} className="bg-white p-1 leading-6 border border-dashed border-gray-200">
                                            <div className="relative inline-block py-2 px-1">
                                                <h4 className="font-bold capitalize"> Bean Fashion {store.ward}</h4>
                                                <span className="relative text-sm pl-5 text-gray-500 w-full inline-block capitalize">
                                                    <i className="absolute top-0.5 left-0">
                                                        {icons.locationDarkBlue}
                                                    </i>
                                                    {
                                                        `${store.addressDetail}, ${store.ward}, ${store.district}, ${store.province}`
                                                    }
                                                </span>
                                                <span className="relative text-sm pl-5 text-gray-500 w-full inline-block capitalize">
                                                    <i className="absolute top-0.5 left-0">
                                                        {icons.phoneDarkBlue}
                                                    </i>
                                                    {
                                                        `${store.phoneNumber}`
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    )) : filteredStoreLocation.map(store => (
                                        <div key={store.id} className="bg-white p-1 leading-6 border border-dashed border-gray-200">
                                            <div className="relative inline-block py-2 px-1">
                                                <h4 className="font-bold capitalize"> Bean Fashion {store.ward}</h4>
                                                <span className="relative text-sm pl-5 text-gray-500 w-full inline-block capitalize">
                                                    <i className="absolute top-0.5 left-0">
                                                        {icons.locationDarkBlue}
                                                    </i>
                                                    {
                                                        `${store.addressDetail}, ${store.ward}, ${store.district}, ${store.province}`
                                                    }
                                                </span>
                                                <span className="relative text-sm pl-5 text-gray-500 w-full inline-block capitalize">
                                                    <i className="absolute top-0.5 left-0">
                                                        {icons.phoneDarkBlue}
                                                    </i>
                                                    {
                                                        `${store.phoneNumber}`
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                    <Col span={16}>
                    <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyAh_hlNkag4uzu6C8YrudKXjWaGbIvvd-M" }}
                            defaultCenter={{
                                lat: 10.99835602,
                                lng: 77.01502627
                            }}
                            defaultZoom={11}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </Col>
                </Row>
            </div>
        </div>
    )
}