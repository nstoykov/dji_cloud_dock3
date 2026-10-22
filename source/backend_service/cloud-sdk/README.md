# How to Integrate CloudSDK

### 1. Add the package name to component scanning: `com.dji.sdk`
### [2. Connect to MQTT](#how-to-connect-to-mqtt)
### [3. Implement the SDK methods](#how-to-implement-sdk-methods)
### [4. Call the SDK methods](#how-to-call-sdk-methods)

## How to Connect to MQTT
- Inject `MqttConnectOptions` and `MqttPahoClientFactory` into the Spring container.
  ![1](./image/6.png)

- Configure `cloud-sdk.mqtt.inbound-topic` in `application.yml`. If not configured, no subscription initialization will be performed.

## How to Implement SDK Methods
- Define a class that extends the abstract class in the `com.dji.sdk.cloudapi.*.api` package.
- Override the specific methods to implement the required functionality.
- Put the class into the Spring container so that Spring manages its lifecycle.

### Example: Device Online
- Define a class named `SDKDeviceService` that extends `AbstractDeviceService`.
  ![1](./image/1.png)
- Override the `updateTopoOnline` method to handle device online logic.
  ![1](./image/2.png)

## How to Call SDK Methods
- Define a class that extends the abstract class in the `com.dji.sdk.cloudapi.*.api` package.
- Inject this class into the class where it will be used.
- Call the specific method.

### Example: Pre-dispatch Flight Mission Command
- Define a class named `SDKWaylineService` that extends `AbstractWaylineService`.
  ![1](./image/3.png)
- Inject this class into `WaylineJobServiceImpl`.
  ![1](./image/4.png)
- Call the dispatch method:
  ![1](./image/5.png)

## How to Implement HTTP Interfaces Defined by CloudAPI
- Define a class that implements the HTTP interface class in the `com.dji.sdk.cloudapi.*.api` package.
- Override the specific methods to implement the interface. No request address or method metadata needs to be defined.
  ![1](./image/7.png)

## How to View All HTTP Interfaces Defined by CloudAPI
- Start the program.
- Open the browser at: http://localhost:6789/swagger-ui/index.html

## How to Integrate WebSocket
- CloudSDK has already defined the WebSocket service but has not implemented WebSocket management. The default address is: http://localhost:6789/api/v1/ws
- A custom integration reference is `com.dji.sample.component.websocket.config`
