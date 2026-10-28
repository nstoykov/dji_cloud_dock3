---
name: qgis-mcp
description: Use when the task requires working with an open QGIS project through the QGIS MCP server (layers, styles, processing, layouts, PostGIS connections). Invoke as "/qgis-mcp <task>".
---

# QGIS през MCP

## 1. Общо правило
Всичко по-долу се прилага към задачата, подадена след `/qgis-mcp`: $ARGUMENTS.
Работи през QGIS MCP tools. `execute_code` (PyQGIS) се ползва само когато няма подходящ готов tool. Ако tool не е наличен, не го измисляй - провери с ToolSearch какво има реално.

## 2. Начален преглед (винаги преди промени)
- `ping` / `list_qgis_instances`
- `get_project_info`, `get_layers` (при нужда `get_layer_tree`)
- Провери CRS на проекта и на слоевете.

## 3. Безопасност
- Преди редакции или масови промени: `create_checkpoint`.
- Редакции: `start_editing` / `commit_edits`; при грешка - `rollback_edits`.
- След успешна работа: `save_project`.
- Не изтривай слоеве или обекти без изрично потвърждение.

## 4. Именуване (задължително)
- Имена на слоеве, колони и стойности в класификатори/домейни - на латиница, на английски.
- Псевдоними на полета (aliases), показвани имена на слоеве и етикети на класификатори/домейни - на български с ГЛАВНИ букви.

## 5. Работа с данни
- Предпочитай GeoPackage и PostGIS: `list_connections`, `execute_connection_sql`, `import_layer_to_connection`.
- Обработки: `execute_processing`, като първо сверяваш параметрите през `get_algorithm_help`.
- Изрази: `validate_expression` преди `field_calculator`.

## 6. Проверка
- След визуални промени: `get_canvas_screenshot` или `render_map`.
- След обработки: `get_layer_extent` и `get_feature_count`.
- Провери `get_message_log` за грешки.

## 7. Отчет в края
3-5 реда: какво е направено, кои слоеве/полета са променени, дали проектът е запазен, какво остава.
