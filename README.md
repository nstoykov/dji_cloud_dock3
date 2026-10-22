# DJI Cloud API Sample - Dock 3 Adaptation Version

[![Version](https://img.shields.io/badge/version-1.10.0-blue.svg)]()
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Java](https://img.shields.io/badge/Java-11-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7.12-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Vue](https://img.shields.io/badge/Vue-3.2.26-brightgreen.svg)](https://vuejs.org/)
[![DJI Dock 3](https://img.shields.io/badge/DJI%20Dock%203-Supported-blue.svg)]()

🔗 **Code Repository**: [GitHub](https://github.com/hecongyuan/dji_cloud_dock3) | [Gitee (faster in China)](https://gitee.com/hecongyuan/dji_cloud_dock3)
🔗 **Open-source DJI Flight Mission Program**: [GitHub](https://github.com/hecongyuan/dji_way_line)

> ⚠️ **Important Notice**:
> - This is a **third-party developed** DJI Cloud API adaptation project, **not an official DJI project**
> - Specifically adapted and optimized for **DJI Dock 3 (Airport 3)**
> - Developed based on **DJI Cloud SDK 1.2.5**

This is a third-party DJI Cloud Platform sample project that provides a complete solution for cloud interaction with DJI Dock 3 and its compatible drones.

> 💬 **Technical Discussion & Commercial Consultation**: Add WeChat (see QR code at the end) to obtain technical support and commercial version services

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Environment Requirements](#environment-requirements)
- [Quick Start](#quick-start)
- [Configuration Guide](#configuration-guide)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Development Guide](#development-guide)
- [FAQ](#faq)
- [Important Notes](#important-notes)
- [Related Links](#related-links)
- [Disclaimer](#disclaimer)
- [License](#license)
- [Contributing](#contributing)
- [Technical Support](#technical-support)
- [Community & Commercial Use](#community--commercial-use)

## 📖 Project Overview

This project is a **third-party cloud platform sample application** based on the DJI Cloud API, specially adapted for **DJI Dock 3 (Airport 3)** with functional optimizations.

### 💻 Interface Preview (Open Source Version)

<div align="center">
  <img src="jt.png" alt="Open source interface screenshot" width="100%"/>
</div>

### About This Project

- **Project Nature**: Third-party development, not an official DJI project
- **Supported Device**: DJI Dock 3 docking station and compatible aircraft
- **Technical Foundation**: Based on DJI Cloud SDK 1.2.5 and Cloud API protocol
- **Development Goal**: Provide a reference implementation for Dock 3 cloud platform integration

### Supported Devices

- ✅ **DJI Dock 3** - Third-generation smart docking station
- ✅ **DJI Matrice 3D/3TD** - Aircraft compatible with Dock 3
- ✅ **DJI RC Plus** - Remote controller (some functions)

### Differences from the Official Demo

This project includes the following adaptations based on the DJI Cloud API:
- Functional optimization specifically for Dock 3 characteristics
- Adaptation to new Dock 3 device status and control commands
- Optimization of data processing for Matrice 3 series aircraft
- More complete Chinese documentation and examples

## ✨ Features

### Core Features (Dock 3 Adaptation)
- 🚁 **Dock 3 Device Management** - Access and management of docks, aircraft, and remote controllers
- 📍 **Mission Planning** - Supports task dispatch and execution monitoring for Dock 3
- 📹 **Live Streaming** - Supports RTMP, RTSP, WebRTC, GB28181 and other protocols
- 📷 **Media Management** - Upload, download, preview, and manage photos/videos for Matrice 3D/3TD
- 🗺️ **Map Services** - Device positioning, route display, and no-fly-zone management
- 📊 **Device Monitoring** - Dock 3 OSD data, HMS health management, and device status monitoring
- 🔄 **Firmware Upgrade** - Online firmware upgrade for Dock 3 and aircraft
- 📝 **Log Management** - Device log upload and analysis
- ⚙️ **Remote Control** - Cloud remote control, camera control, and gimbal control

### Advanced Features
- 🔐 JWT authentication
- 🔌 MQTT communication
- 🌐 WebSocket real-time push
- 📦 Object storage integration (MinIO / Alibaba OSS / AWS S3)
- 🎯 Flight area management
- 🔧 Device configuration synchronization

## 🛠️ Technology Stack

### Backend
- **Framework**: Spring Boot 2.7.12
- **Language**: Java 11
- **Database**: MySQL 8.0
- **Cache**: Redis
- **Message Queue**: MQTT (Eclipse Paho)
- **ORM**: MyBatis Plus 3.4.2
- **Object Storage**: MinIO / Alibaba OSS / AWS S3
- **API Documentation**: Swagger/OpenAPI

### Frontend
- **Framework**: Vue 3.2.26
- **Build Tool**: Vite 2.4.0
- **UI Components**: Ant Design Vue 2.2.8
- **Map**: AMap
- **Video Playback**: flv.js, Agora RTC SDK
- **State Management**: Vuex 4.0.2
- **Routing**: Vue Router 4
- **HTTP Client**: Axios
- **Real-time Communication**: MQTT.js, WebSocket

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend App (Vue 3)                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Device Mgmt │ │ Mission Mgmt │ │ Live Stream │ │ Media Mgmt │ │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
            │                    │                    │
            ▼                    ▼                    ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend Service (Spring Boot)            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ REST API │  │  MQTT    │  │ WebSocket│  │ Cloud SDK│   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└─────────────────────────────────────────────────────────────┘
            │                    │                    │
            ▼                    ▼                    ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│    MySQL     │  │     Redis    │  │ Object Storage │
└──────────────┘  └──────────────┘  └──────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│                      MQTT Broker                             │
└─────────────────────────────────────────────────────────────┘
            │
            ▼
┌─────────────────────────────────────────────────────────────┐
│              DJI Dock 3 + Matrice 3D/3TD                     │
└─────────────────────────────────────────────────────────────┘
```

## 💻 Environment Requirements

### Required Environment
- **JDK**: 11 or higher
- **Maven**: 3.6+
- **Node.js**: 14.0+
- **npm/yarn/pnpm**: any package manager

### Dependent Services
- **MySQL**: 8.0+
- **Redis**: 5.0+
- **MQTT Broker**: EMQX/Mosquitto and others
- **Object Storage**: MinIO / Alibaba OSS / AWS S3 (optional)

## 🚀 Quick Start

### 1. Clone the Project

```bash
# Clone from GitHub
git clone https://github.com/hecongyuan/dji_cloud_dock3.git

# Or clone from Gitee (faster in China)
git clone https://gitee.com/hecongyuan/dji_cloud_dock3.git

cd dji_cloud_dock3
```

### 2. Initialize the Database

```bash
# Connect to the MySQL database
mysql -u root -p

# Create the database
CREATE DATABASE cloud_sample CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Import the initialization script
mysql -u root -p cloud_sample < source/mysql/init.sql
```

### 3. Configure the Backend

> 📖 **For detailed configuration instructions, please refer to the [CONFIG.md](CONFIG.md) document**

Copy the configuration template:

```bash
cd source/backend_service/sample/src/main/resources
cp application.yml.example application.yml
```

Edit `application.yml` and update the key settings:

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/cloud_sample
    username: root
    password: your_password

  redis:
    host: localhost
    port: 6379

mqtt:
  BASIC:
    host: localhost
    port: 1883
    username: admin
    password: public

oss:
  enable: true
  provider: minio
  endpoint: http://localhost:9000
  access-key: minioadmin
  secret-key: minioadmin
  bucket: dji-cloud

cloud-api:
  app:
    id: your_app_id
    key: your_app_key
    license: your_app_license
```

> ⚠️ **Important**: Please create an application on the [DJI Developer Platform](https://developer.dji.com/user/apps/#all) to obtain the App ID, App Key, and License

### 4. Start the Backend

```bash
cd source/backend_service
mvn clean install
cd sample
mvn spring-boot:run
```

The backend service will start at `http://localhost:6789`

### 5. Device Access Configuration

#### Dock 3 Device Access

1. Configure the cloud platform information on the Dock 3 device:
    - Platform address: `http://your-server-ip:6789`
    - MQTT address: `mqtt://your-server-ip:1883`
    - App ID: set in the configuration file as `cloud-api.app.id`

2. Ensure the Dock 3 can access the server through the following ports:
    - `6789` - HTTP API port
    - `1883` - MQTT port
    - `8083` - MQTT WebSocket port (DRC remote control)

3. After the device comes online, you can view its status in the frontend device management page

### 6. Start the Frontend

Copy the frontend configuration file:

```bash
cd source/nginx/front_page/src/api/http
cp config.ts.example config.ts
```

Edit `config.ts` and configure the backend address and DJI credentials:

```typescript
export const CURRENT_CONFIG = {
  appId: 'your_app_id',
  appKey: 'your_app_key',
  appLicense: 'your_app_license',
  baseURL: 'http://localhost:6789/',
  websocketURL: 'ws://localhost:6789/api/v1/ws',
}
```

Install dependencies and start:

```bash
cd source/nginx/front_page
npm install
npm run serve
```

The frontend application will start at `http://localhost:5173` (port may differ)

### 7. Access the Application

- **Frontend Application**: http://localhost:5173
- **Backend API Documentation**: http://localhost:6789/swagger-ui/index.html
- **WebSocket Address**: ws://localhost:6789/api/v1/ws

## ⚙️ Configuration Guide

### Database Configuration

```yaml
spring:
  datasource:
    druid:
      url: jdbc:mysql://localhost:3306/cloud_sample?useSSL=false&allowPublicKeyRetrieval=true
      username: root
      password: your_password
      initial-size: 10
      min-idle: 10
      max-active: 20
```

### MQTT Configuration

The system supports two MQTT connections:

1. **BASIC** - Basic MQTT connection (device communication)
2. **DRC** - Remote control MQTT connection

```yaml
mqtt:
  BASIC:
    protocol: MQTT  # MQTT/WS/WSS
    host: localhost
    port: 1883
    username: admin
    password: public
    client-id: cloud-api-sample
  DRC:
    protocol: WS
    host: localhost
    port: 8083
    path: /mqtt
```

### Object Storage Configuration

#### MinIO (Recommended for Development)

```yaml
oss:
  enable: true
  provider: minio
  endpoint: http://localhost:9000
  access-key: minioadmin
  secret-key: minioadmin
  bucket: dji-cloud
  expire: 3600
```

#### Alibaba Cloud OSS

```yaml
oss:
  enable: true
  provider: ALIYUN
  endpoint: https://oss-cn-hangzhou.aliyuncs.com
  access-key: your_access_key
  secret-key: your_secret_key
  region: cn-hangzhou
  bucket: your_bucket
  role-arn: acs:ram::123456789:role/stsrole
```

#### AWS S3

```yaml
oss:
  enable: true
  provider: aws
  endpoint: https://s3.us-east-1.amazonaws.com
  access-key: your_access_key
  secret-key: your_secret_key
  region: us-east-1
  bucket: your_bucket
```

### Live Streaming Configuration

The project supports multiple live streaming protocols:

```yaml
livestream:
  url:
    # RTMP push
    rtmp:
      url: rtmp://localhost:1935/rtp/

    # RTSP stream
    rtsp:
      username: dji-cloud-api
      password: 123456
      port: 8554

    # WebRTC (WHIP)
    whip:
      url: http://localhost:8088/rtc/v1/whip/?app=live&stream=

    # GB28181
    gb28181:
      serverIP: localhost
      serverPort: 8116
      serverID: 41010500002000000001
```

## 📚 API Documentation

### Swagger UI

After starting the backend service, visit: http://localhost:6789/swagger-ui/index.html

### Main API Endpoints

| Module | Endpoint | Description |
|--------|----------|-------------|
| Device Management | `/manage/api/v1/devices` | Device list, details, binding |
| Mission Planning | `/wayline/api/v1/workspaces/{workspace_id}/jobs` | Task creation, execution, monitoring |
| Media Files | `/media/api/v1/workspaces/{workspace_id}/files` | Upload, download, delete |
| Real-time Control | `/control/api/v1/devices/{device_sn}/drc` | Remote control, camera control |
| Map Services | `/map/api/v1/workspaces/{workspace_id}/elements` | Map element management |
| Storage Service | `/storage/api/v1/workspaces/{workspace_id}/sts` | Temporary credential acquisition |

### WebSocket Events

Connection address: `ws://localhost:6789/api/v1/ws`

Main event types:
- `device_online` - device online
- `device_offline` - device offline
- `device_osd` - device status data
- `device_hms` - device health information
- `flight_task_progress` - mission execution progress

## 📁 Project Structure

```
Cloud-API-Demo/
├── source/
│   ├── backend_service/          # Backend project
│   │   ├── cloud-sdk/           # DJI Cloud SDK
│   │   └── sample/              # Sample application
│   ├── nginx/front_page/        # Frontend project
│   │   ├── src/                 # Frontend source code
│   │   ├── package.json
│   │   └── vite.config.ts
│   └── mysql/                  # Database scripts
│       └── init.sql             # Initialization SQL
├── LICENSE
└── README.md
```

## 🔧 Development Guide

### Backend Development

#### 1. Implement a Cloud SDK Method

Create a service class that extends the SDK abstract class:

```java
@Service
public class DeviceServiceImpl extends AbstractDeviceService {
    
    @Override
    public void updateTopoOnline(UpdateTopo topo) {
        // Implement device online logic
        log.info("Device online: {}", topo.getDeviceSn());
    }
}
```

#### 2. Call the Cloud SDK Method

Inject the service and call it:

```java
@Service
public class WaylineJobService {
    
    @Autowired
    private AbstractWaylineService waylineService;
    
    public void executeJob(String jobId) {
        waylineService.flightTaskPrepare(jobId);
    }
}
```

#### 3. Implement an HTTP Interface

Implement the interface defined by the SDK:

```java
@RestController
public class DeviceController implements IDeviceApi {
    
    @Override
    public HttpResultResponse<List<Device>> getDevices() {
        // Implement device list retrieval
        return HttpResultResponse.success(deviceList);
    }
}
```

### Frontend Development

#### 1. API Calls

```typescript
import { getDevices } from '@/api/manage'

const fetchDevices = async () => {
  const res = await getDevices({ workspace_id: workspaceId })
  if (res.code === 0) {
    devices.value = res.data
  }
}
```

#### 2. MQTT Subscription

```typescript
import { useMqtt } from '@/components/g-map/use-mqtt'

const { subscribe } = useMqtt()

subscribe('sys/product/+/status', (topic, message) => {
  console.log('Device status:', message)
})
```

#### 3. WebSocket Connection

```typescript
import { useConnectWebsocket } from '@/hooks/use-connect-websocket'

const { connect, on } = useConnectWebsocket()

connect()
on('device_osd', (data) => {
  console.log('OSD data:', data)
})
```

### Adding a New Feature

1. **Backend**:
    - Create a new module under `source/backend_service/sample/src/main/java/com/dji/sample/`
    - Define Controller, Service, and DAO
    - Add configuration in `application.yml`

2. **Frontend**:
    - Add API interfaces under `source/nginx/front_page/src/api/`
    - Create components under `source/nginx/front_page/src/components/`
    - Add pages under `source/nginx/front_page/src/pages/`
    - Configure routes in the router

## 🐛 FAQ

### 1. Backend Startup Fails

**Problem**: Database connection failure
```text
com.mysql.cj.jdbc.exceptions.CommunicationsException: Communications link failure
```

**Solution**:
- Check whether MySQL is running
- Confirm the database connection settings are correct
- Check firewall settings

### 2. MQTT Connection Fails

**Problem**: Unable to connect to the MQTT Broker

**Solution**:
- Confirm the MQTT Broker is running
- Check whether the ports are occupied
- Verify the username and password

### 3. Frontend Cannot Access Backend API

**Problem**: CORS cross-origin error

**Solution**:
- CORS is already configured in the backend; check the `CorsFilter` configuration
- Confirm the frontend is using the correct backend address

### 4. Object Storage Upload Fails

**Problem**: MinIO connection failure

**Solution**:
- Confirm the MinIO service is running
- Check whether the bucket has been created
- Verify the access keys are correct

### 5. Dock 3 Device Fails to Come Online

**Problem**: Dock 3 cannot connect to the platform

**Solution**:
- Check the network connection of the Dock 3
- Confirm the platform address and port configured on the Dock 3 are correct
- Verify the App ID, Key, and License are configured correctly
- Check whether the server firewall has opened the required ports (`6789`, `1883`, `8083`)
- Review backend logs at `logs/cloud-api-sample.log`

### 6. Mission Execution Fails

**Problem**: No response after the task is sent to the Dock 3

**Solution**:
- Confirm the mission file format matches Dock 3 requirements
- Check whether the Dock 3 current state allows task execution
- Review HMS information for abnormal alarms
- Check whether MQTT messages are sending and receiving normally

### 7. Live Video Cannot Play

**Problem**: Frontend cannot display real-time video

**Solution**:
- Confirm the live streaming service (RTMP/WebRTC) is configured correctly
- Check whether the Dock 3 has enabled live stream push
- Verify network bandwidth is sufficient
- Review browser console errors

## 📌 Important Notes

### Dock 3 Specific Notes

1. **Device Compatibility**: This project is specifically adapted for Dock 3; other models may require additional adaptation
2. **Firmware Version**: It is recommended to keep the Dock 3 firmware updated for best compatibility
3. **Network Requirements**: Dock 3 requires a stable network connection; a wired or 4G/5G connection is recommended
4. **App Credentials**: You must create an application on the DJI Developer Platform and obtain a valid License

### Production Deployment Recommendations

1. **Security Hardening**:
    - Change the default database password
    - Configure HTTPS certificates
    - Enable MQTT authentication and TLS
    - Configure firewall rules

2. **Performance Optimization**:
    - Use Nginx as a reverse proxy
    - Configure Redis clustering
    - Optimize database indexes
    - Enable CDN acceleration

3. **Monitoring & Alerts**:
    - Configure log collection and analysis
    - Set up system monitoring alerts
    - Back up the database regularly

## 🔗 Related Links

- **GitHub Repository**: https://github.com/hecongyuan/dji_cloud_dock3
- **Gitee Repository**: https://gitee.com/hecongyuan/dji_cloud_dock3
- **Open-source DJI Flight Mission Program**: https://github.com/hecongyuan/dji_way_line
- **DJI Developer Platform**: https://developer.dji.com
- **Cloud API Documentation**: https://developer.dji.com/doc/cloud-api-tutorial/cn/
- **DJI Technical Support**: https://sdk-forum.dji.net/

## ⚠️ Disclaimer

This project is a third-party sample project for learning and reference only. The developer is not responsible for any issues arising from its use. For production deployments, please evaluate the risks and conduct adequate security and performance assessments.

DJI, DJI Dock 3, Matrice 3D/3TD, and related names are registered trademarks of DJI. This project is not officially affiliated with DJI.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions in the form of Issues and Pull Requests are welcome!

If this project is helpful to you, please give it a Star ⭐️

## 📞 Technical Support

- **Issues**: Submit an Issue in this repository
- **DJI Official Documentation**: https://developer.dji.com/doc/cloud-api-tutorial/cn/
- **DJI Developer Forum**: https://sdk-forum.dji.net/

## 💬 Community & Commercial Use

### Technical Exchange

If you need technical exchange, product consultation, or commercial support, please add WeChat:

<div align="center">
  <img src="wx.JPG" alt="WeChat QR code" width="200"/>
  <p><strong>Scan the code to add the author and join the community. Please note: dji_cloud_dock3</strong></p>
</div>

### Commercial Version

<div align="center">
  <img src="doc/9B3EA1D0BE249C3D52B4FF9B09E604BE.png" alt="Commercial version screenshot" width="100%"/>
</div>

This project is the open-source learning version. We also provide a **commercial full solution**, including the following core products:

| Product Module | Description |
|----------------|-------------|
| 🗺️ **Commercial Flight Route** | Professional route planning and management system with support for complex mission orchestration, multi-drone coordination, scheduled inspections, route library management, and route editor/KMZ export |
| 🏗️ **3D Reconstruction Platform** | High-precision 3D model generation, supporting oblique photography, orthophoto output, point cloud processing, realistic 3D visualization, and measurement analysis |
| 🤖 **AI Computing Platform** | Intelligent recognition and analysis platform adapted to **Sophon** and **NVIDIA Jetson**, supporting edge computing + cloud collaboration inference |

> 💰 **Total price: ¥13.8万** (includes platform licensing + deployment + technical support)
>
> 📞 **Welcome to inquire**: Add WeChat (see QR code below) to get a detailed solution and custom development support

If you also need additional services, please contact us via WeChat:

- 🏢 **Enterprise Custom Development** - Function customization according to business needs
- 🔧 **Technical Support Services** - Professional technical support and training
- 🚀 **Deployment Implementation Services** - Support for production deployment and optimization
- 📊 **Feature Expansion Development** - Development of additional advanced modules
- 🔐 **Security Hardening Services** - Enterprise security architecture design and implementation
- 📱 **Mobile App Development** - iOS/Android native app development

> 📖 **For detailed service content and case studies, please refer to [CONTACT.md](CONTACT.md)**

---

**Note**: This project is a third-party development project intended for learning and reference only. For production deployment, please carry out appropriate hardening and performance tuning based on actual conditions.



































































































































































































